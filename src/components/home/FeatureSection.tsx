import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/motion-wrapper'

const features = [
  {
    title:
      'Frost-proof water bowls for healthy animals &ndash; ideal solutions for your stable and your water supply.',
    image:
      'https://images.unsplash.com/photo-1545620857-7975d9c22119?q=80&w=2070&auto=format&fit=crop',
    linkText: 'Discover anti-freeze solutions now!',
    href: '#',
  },
  {
    title:
      'Systematic pest control: effective ways to protect your barn and animals from rats and mice.',
    image:
      'https://images.unsplash.com/photo-1425082661705-1834bfd905bf?q=80&w=2076&auto=format&fit=crop',
    linkText: 'Find out now and ensure hygiene!',
    href: '#',
  },
  {
    title:
      'With HAPPYCOW cattle brushes from Kerbl: Healthy, happy animals for better performance.',
    image:
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop',
    linkText: 'For healthy and happy animals',
    href: '#',
  },
  {
    title:
      'Optimum lighting conditions &ndash; for productive agriculture, species-appropriate husbandry and safe work processes.',
    image:
      'https://images.unsplash.com/photo-1498144846853-6075170f7062?q=80&w=2070&auto=format&fit=crop',
    linkText: 'Learn more and secure your benefits!',
    href: '#',
  },
  {
    title:
      'Experience the perfect balance of function, comfort and style &ndash; with the Cavalliero autumn/winter collection.',
    image:
      'https://images.unsplash.com/photo-1551884831-bbf3ddd77535?q=80&w=2080&auto=format&fit=crop',
    linkText: 'View highlights now!',
    href: '#',
  },
  {
    title:
      'Protect your land reliably from beaver damage &ndash; with AKO electric fences for effective prevention.',
    image:
      'https://images.unsplash.com/photo-1502519144378-7d84812328bb?q=80&w=1974&auto=format&fit=crop',
    linkText: 'Discover the right beaver deterrent systems now!',
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
              <img
                src={feature.image}
                alt=''
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
