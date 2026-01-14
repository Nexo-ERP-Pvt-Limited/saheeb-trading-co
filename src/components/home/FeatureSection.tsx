import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const featureCards = [
  {
    image: '/images/about-legacy.png',
    title:
      'Frost-proof water bowls for healthy animals – ideal solutions for your stable and your water supply.',
    linkText: 'Discover anti-freeze solutions now!',
    href: '/products?category=water-bowls',
  },
  {
    image: '/images/surgical-instruments.png',
    title:
      'Professional veterinary instruments for precise diagnostics and treatment.',
    linkText: 'Explore veterinary tools!',
    href: '/products?category=veterinary',
  },
]

export function FeatureSection() {
  return (
    <section className='container mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        {/* Feature Cards - 2 columns on desktop */}
        <div className='lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {featureCards.map((card, index) => (
            <div key={index} className='flex flex-col'>
              {/* Image */}
              <Link
                href={card.href}
                className='relative h-64 md:h-72 overflow-hidden group'
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </Link>

              {/* Text Content */}
              <div className='py-4'>
                <p className='text-gray-800 font-bold text-lg leading-snug mb-4'>
                  {card.title}
                </p>
                <Button
                  asChild
                  className='bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-6 py-5 text-sm w-full md:w-auto'
                >
                  <Link href={card.href}>{card.linkText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar - Flip Catalogues */}
        <div className='lg:col-span-4'>
          <div className='bg-white'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Discover the latest flip catalogues
            </h3>

            {/* Catalogue Preview Card */}
            <Link href='/catalogues' className='block group'>
              <div className='relative bg-primary p-4 rounded-sm overflow-hidden'>
                <div className='text-white'>
                  <p className='font-bold text-lg'>
                    Agricultural Supplies 2026
                  </p>
                  <p className='text-sm text-white/80'>New products 01/2026</p>
                </div>
              </div>
            </Link>

            {/* Additional catalogue links */}
            <div className='mt-4 space-y-3'>
              <Link
                href='/catalogues/veterinary'
                className='block p-3 border border-gray-200 hover:border-primary transition-colors'
              >
                <p className='font-bold text-gray-800'>Veterinary Catalogue</p>
                <p className='text-sm text-gray-500'>2026 Edition</p>
              </Link>
              <Link
                href='/catalogues/equestrian'
                className='block p-3 border border-gray-200 hover:border-primary transition-colors'
              >
                <p className='font-bold text-gray-800'>Equestrian Care</p>
                <p className='text-sm text-gray-500'>2026 Edition</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
