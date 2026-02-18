import Link from 'next/link'
import Image from 'next/image'

interface FeaturedProduct {
  id: string
  title: string
  sku: string
  image: string | null
}

export function FeaturedProducts({
  products,
}: {
  products: FeaturedProduct[]
}) {
  if (products.length === 0) {
    return <p className='text-gray-400 text-center py-12'>No products found.</p>
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {products.map((product) => (
        <Link key={product.id} href='/products' className='group block'>
          {/* Image */}
          <div className='relative aspect-square bg-gray-50 border border-gray-100 rounded-lg overflow-hidden mb-3'>
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
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
            {product.title}
          </p>
          {product.sku && (
            <p className='text-xs text-gray-400'>SKU: {product.sku}</p>
          )}
        </Link>
      ))}
    </div>
  )
}
