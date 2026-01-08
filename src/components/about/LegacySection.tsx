import Image from 'next/image'
import { FadeIn, SlideInLeft } from '@/components/ui/motion-wrapper'

export function LegacySection() {
  return (
    <section className='py-20 px-4 md:px-8 max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row items-center gap-12'>
        <div className='w-full lg:w-1/2'>
          <SlideInLeft>
            <h2 className='text-3xl font-bold mb-6 text-foreground'>
              Our Legacy
            </h2>
            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                Founded in 1976 in Sialkot, Pakistan, Saheeb Trading Co began as
                a small manufacturing unit dedicated to producing high-quality
                veterinary instruments. What started as a modest workshop soon
                became a symbol of craftsmanship, dedication, and family
                tradition.
              </p>
              <p>
                Over the decades, as the business passed to the next generation,
                the company expanded its expertise beyond veterinary instruments
                to include surgical, dental, and equestrian products—continuing
                to evolve with global trends, technological advancements, and
                market needs. With every new chapter, one constant remained: a
                commitment to precision, quality, and customer trust.
              </p>
              <p>
                Today, Saheeb Trading Co stands as a globally recognized name in
                the human and animal health industry. Generations of hard work,
                integrity, and understanding of customer requirements have
                shaped the company into what it is—an organization built on
                values, strengthened by people, and driven by innovation.
              </p>
            </div>
          </SlideInLeft>
        </div>
        <div className='w-full lg:w-1/2'>
          <FadeIn>
            <div className='relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square max-h-[500px]'>
              <Image
                src='/images/surgical-instruments.png'
                alt='High quality surgical instruments craftsmanship'
                fill
                className='object-cover'
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
