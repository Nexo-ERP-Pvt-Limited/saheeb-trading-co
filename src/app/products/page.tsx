import { db } from '../../../db/index'
import { products, categories, subCategories } from '../../../db/schema'
import type { Product, Category } from '@/components/products/types'
import { unstable_cache } from 'next/cache'

export const metadata = {
  title: 'All Products | Saheeb Trading Co.',
  description:
    'Browse our extensive catalog of high-quality surgical, veterinary, and dental instruments.',
}

export const revalidate = 300

import { ProductsClient } from './ProductsClient'

async function getProducts(): Promise<Product[]> {
  try {
    const allProducts = await db.select().from(products)
    const allSubCategories = await db.select().from(subCategories)
    const allCategories = await db.select().from(categories)

    // Build lookup maps
    const subCatMap = new Map(allSubCategories.map((sc) => [sc.id, sc]))
    const catMap = new Map(allCategories.map((c) => [c.id, c]))

    return allProducts.map((p) => {
      const subCat = p.subCategoryId ? subCatMap.get(p.subCategoryId) : null
      const cat = subCat?.categoryId ? catMap.get(subCat.categoryId) : null

      return {
        id: p.id,
        name: p.title,
        sku: p.sku || '',
        description: p.description,
        image: p.image || null,
        categoryName: cat?.name || '',
        subCategoryName: subCat?.name || '',
        subCategorySlug: subCat?.slug || '',
      }
    })
  } catch {
    return []
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const allCategories = await db.select().from(categories)
    const allSubCategories = await db.select().from(subCategories)

    return allCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      subcategories: allSubCategories
        .filter((sub) => sub.categoryId === cat.id)
        .map((sub) => ({
          id: sub.id,
          name: sub.name,
          slug: sub.slug,
        })),
    }))
  } catch {
    return []
  }
}

const getProductsCached = unstable_cache(
  getProducts,
  ['products-page-products'],
  {
    revalidate,
    tags: ['products', 'subcategories', 'categories'],
  },
)

const getCategoriesCached = unstable_cache(
  getCategories,
  ['products-page-categories'],
  {
    revalidate,
    tags: ['categories', 'subcategories'],
  },
)

export default async function ProductsPage() {
  const [categories, productsList] = await Promise.all([
    getCategoriesCached(),
    getProductsCached(),
  ])

  return (
    <main className='min-h-screen pt-4 md:pt-20 pb-20 bg-background'>
      <div className='container mx-auto px-4 md:px-6'>
        <ProductsClient categories={categories} products={productsList} />
      </div>
    </main>
  )
}
