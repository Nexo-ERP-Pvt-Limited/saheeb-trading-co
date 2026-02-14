import Link from 'next/link'
import Image from 'next/image'

interface StrapiProduct {
  id: number
  name: string
  slug: string
  sku: string
  image?: { url: string } | null
  sub_category?: { name: string; category?: { name: string } } | null
}

async function getFeaturedProducts(): Promise<StrapiProduct[]> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&pagination[pageSize]=4&sort=createdAt:desc&filters[image][$notNull]=true`,
      { cache: 'no-store', signal: controller.signal },
    )
    clearTimeout(timeout)

    if (!res.ok) {
      console.error('Featured products API error:', res.status)
      return []
    }
    const json = await res.json()
    return json.data || []
  } catch (err) {
    console.error('Featured products fetch failed:', err)
    return []
  }
}

export async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  if (products.length === 0) {
    return <p className='text-gray-400 text-center py-12'>No products found.</p>
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {products.map((product) => (
        <Link key={product.id} href='/products' className='group block'>
          {/* Image */}
          <div className='relative aspect-square bg-gray-50 border border-gray-100 rounded-lg overflow-hidden mb-3'>
            {product.image?.url ? (
              <Image
                src={product.image.url}
                alt={product.name}
                fill
                className='object-contain p-4 group-hover:scale-105 transition-transform duration-500'
                sizes='(max-width: 768px) 50vw, 25vw'
              />
            ) : (
              <div className='flex items-center justify-center h-full text-gray-300 text-sm'>
                No Image
              </div>
            )}
          </div>

          {/* Info */}
          <p className='font-bold text-gray-800 text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2'>
            {product.name}
          </p>
          {product.sub_category?.category?.name && (
            <p className='text-xs text-gray-400 mt-1'>
              {product.sub_category.category.name}
            </p>
          )}
          {product.sku && (
            <p className='text-xs text-gray-400'>SKU: {product.sku}</p>
          )}
        </Link>
      ))}
    </div>
  )
}
