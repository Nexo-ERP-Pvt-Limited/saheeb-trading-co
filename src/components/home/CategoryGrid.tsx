import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    title: 'Surgical Instruments',
    href: '/products?category=surgical-instruments',
    image: '/images/categories/surgical-instruments.jpg',
  },
  {
    title: 'Veterinary Tools',
    href: '/products?category=veterinary-tools',
    image: '/images/categories/veterinary-tools.webp',
  },
  {
    title: 'Dental Kits',
    href: '/products?category=dental-kits',
    image: '/images/categories/dental-kits.webp',
  },
  {
    title: 'Equestrian products',
    href: '/products?category=equestrian-products',
    image: '/images/categories/equestrian-products.webp',
  },
]

export function CategoryGrid() {
  return (
    <section className='w-full'>
      {/* Desktop: 4 columns, Mobile: 2 columns */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-1'>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className='group flex flex-col overflow-hidden'
          >
            {/* Green Header */}
            <div className='bg-primary py-3 px-3 mx-1'>
              <h3 className='text-white text-sm font-bold leading-tight'>
                {category.title}
              </h3>
            </div>

            {/* Category Image */}
            <div className='relative h-28 md:h-32 lg:h-36 bg-gray-100 overflow-hidden mx-1'>
              <Image
                src={category.image}
                alt={category.title}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
