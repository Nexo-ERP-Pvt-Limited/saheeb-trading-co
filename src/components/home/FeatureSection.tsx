import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/motion-wrapper'

const features = [
  {
    title:
      'Generations of Trust & Craftsmanship: Founded in 1976, delivering excellence in surgical and veterinary instruments.',
    image: '/images/about-legacy.png',
    linkText: 'Learn about our heritage',
    href: '#',
  },
  {
    title:
      'Global Reach: Exporting premium quality instruments to professionals across continents.',
    image: '/images/surgical-instruments.png',
    linkText: 'View our global network',
    href: '#',
  },
  {
    title:
      'Precision Dental Instruments: High-grade steel tools for advanced dental procedures.',
    image: '/images/surgical-instruments.png',
    linkText: 'Explore Dental Catalog',
    href: '#',
  },
  {
    title:
      'Veterinary Excellence: Specialized tools designed for the health and well-being of all animals.',
    image: '/images/surgical-instruments.png',
    linkText: 'See Veterinary Solutions',
    href: '#',
  },
  {
    title:
      'Equestrian Mastery: Ergonomic and durable instruments for horse care and grooming.',
    image: '/images/about-legacy.png',
    linkText: 'View Equestrian range',
    href: '#',
  },
  {
    title:
      'Quality Assurance: ISO certified manufacturing ensuring the highest standards of safety and precision.',
    image: '/images/surgical-instruments.png',
    linkText: 'Our Quality Standards',
    href: '#',
  },
]

export function FeatureSection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {features.map((feature, index) => (
        <FadeIn
          key={index}
          className='flex flex-col space-y-4 group'
          delay={index * 0.1}
        >
          <Link
            href={feature.href}
            className='overflow-hidden block relative aspect-video'
          >
            <div className='absolute inset-0 bg-gray-100'>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          </Link>
          <div className='space-y-4'>
            <h3 className='font-bold text-gray-900 leading-tight min-h-[48px]'>
              {feature.title}
            </h3>
            <Button
              asChild
              className='bg-kerbl-green hover:bg-kerbl-green-dark text-white font-bold rounded-sm h-auto py-2 px-4 whitespace-normal text-left sm:w-auto w-full justify-start'
            >
              <Link href={feature.href}>{feature.linkText}</Link>
            </Button>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
