import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { StaggerContainer, SlideInLeft } from '@/components/ui/motion-wrapper'

const categories = [
  {
    title: 'Veterinary Instruments',
    image: '/images/surgical-instruments.png',
    color: 'bg-kerbl-green',
    href: '#',
  },
  {
    title: 'Surgical Instruments',
    image: '/images/surgical-instruments.png',
    color: 'bg-kerbl-green',
    href: '#',
  },
  {
    title: 'Dental Instruments',
    image: '/images/surgical-instruments.png',
    color: 'bg-kerbl-green',
    href: '#',
  },
  {
    title: 'Equestrian',
    image: '/images/about-legacy.png',
    color: 'bg-kerbl-green',
    href: '#',
  },
  {
    title: 'Grooming & Care',
    image: '/images/about-legacy.png', // Updated to pet grooming
    color: 'bg-kerbl-green',
    href: '#',
  },
  {
    title: 'Beauty Instruments',
    image: '/images/surgical-instruments.png', // Updated to clearer beauty/spa
    color: 'bg-kerbl-green',
    href: '#',
  },
]

export function CategoryGrid() {
  return (
    <section className='container mx-auto px-4 mt-16 relative z-30 mb-2'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
          What We <span className='text-kerbl-green'>Offer</span>
        </h2>
        <div className='w-24 h-1 bg-kerbl-green mx-auto mt-4 rounded-full' />
      </div>

      <StaggerContainer
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        staggerDelay={0.1}
      >
        {categories.map((category, index) => (
          <SlideInLeft
            key={index}
            className='group relative block overflow-hidden shadow-lg h-full rounded-md border border-gray-100'
            delay={index * 0.1}
          >
            <Link href={category.href} className='block w-full h-full'>
              <div className='aspect-[4/3] w-full relative overflow-hidden'>
                <div className='absolute inset-0 bg-gray-200'>
                  {/* Use next/image for production, plain img for prototype speed/compatibility if domain not config */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity' />

                <div className='absolute bottom-0 left-0 p-6 w-full'>
                  <div className='w-12 h-1 bg-kerbl-green mb-3 transform origin-left transition-transform duration-300 group-hover:scale-x-150' />
                  <h3 className='text-white text-xl md:text-2xl font-bold uppercase tracking-wide mb-1'>
                    {category.title}
                  </h3>
                  <p className='text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75'>
                    Explore Products &rarr;
                  </p>
                </div>

                <div
                  className={cn(
                    'absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold uppercase rounded-sm shadow-sm',
                    category.color
                  )}
                >
                  Premium
                </div>
              </div>
            </Link>
          </SlideInLeft>
        ))}
      </StaggerContainer>
    </section>
  )
}
