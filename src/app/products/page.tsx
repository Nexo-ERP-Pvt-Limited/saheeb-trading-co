import { ProductsClient } from './ProductsClient'
import type { Category, Product } from '@/components/products/types'

export const metadata = {
  title: 'All Products | Saheeb Trading Co.',
  description:
    'Browse our extensive catalog of high-quality surgical, veterinary, and dental instruments.',
}

// Helper to extract plain text from Strapi rich text
function extractPlainText(richText: unknown): string | null {
  if (!richText || !Array.isArray(richText)) return null

  return (
    richText
      .map(
        (block: { children?: { text?: string }[] }) =>
          block.children?.map((child) => child.text || '').join('') || '',
      )
      .join(' ')
      .trim() || null
  )
}

interface StrapiSubCategory {
  id: number
  name: string
  slug: string
  category?: { id: number; name: string }
}

interface StrapiProductResponse {
  id: number
  name: string
  slug: string
  sku: string
  description: unknown
  image?: { url: string } | null
  sub_category?: StrapiSubCategory | null
}

async function getProducts(): Promise<Product[]> {
  try {
    const allProducts: StrapiProductResponse[] = []
    let page = 1
    let pageCount = 1

    // Loop through all Strapi pages to fetch every product
    while (page <= pageCount) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&pagination[page]=${page}&pagination[pageSize]=25`,
        { cache: 'no-store' },
      )

      if (!res.ok) return []

      const json = await res.json()
      const products: StrapiProductResponse[] = json.data || []
      allProducts.push(...products)

      // Update pageCount from Strapi's pagination meta
      pageCount = json.meta?.pagination?.pageCount || 1
      page++
    }

    return allProducts.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      sku: p.sku || '',
      description: extractPlainText(p.description),
      image: p.image?.url || null,
      categoryName: p.sub_category?.category?.name || '',
      subCategoryName: p.sub_category?.name || '',
      subCategorySlug: p.sub_category?.slug || '',
    }))
  } catch {
    return []
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sub-categories?populate=*`,
      { cache: 'no-store' },
    )

    if (!res.ok) return []

    const json = await res.json()
    const subCategories: StrapiSubCategory[] = json.data || []

    // Group sub-categories by their parent category
    const categoryMap = new Map<number, Category>()

    for (const sub of subCategories) {
      if (!sub.category) continue

      const catId = sub.category.id
      if (!categoryMap.has(catId)) {
        categoryMap.set(catId, {
          id: catId,
          name: sub.category.name,
          subcategories: [],
        })
      }

      categoryMap.get(catId)!.subcategories.push({
        id: sub.id,
        name: sub.name,
        slug: sub.slug,
      })
    }

    return Array.from(categoryMap.values())
  } catch {
    return []
  }
}

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ])

  return (
    <main className='min-h-screen pt-20 pb-20 bg-background'>
      <div className='container mx-auto px-4 md:px-6'>
        <ProductsClient categories={categories} products={products} />
      </div>
    </main>
  )
}
