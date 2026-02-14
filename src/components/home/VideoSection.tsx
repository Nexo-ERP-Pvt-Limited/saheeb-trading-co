'use client'

import { FadeIn } from '@/components/ui/motion-wrapper'

export function VideoSection() {
  return (
    <section className='container mx-auto px-4 mb-20 font-sans'>
      <div className='space-y-6'>
        <FadeIn>
          <h2 className='text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            Your <span className='text-primary'>Manufacturing</span> Partners
          </h2>
          <div className='w-20 h-1 bg-primary mt-4 mb-8' />
        </FadeIn>

        <div className='space-y-4'>
          <FadeIn delay={0.2}>
            <p className='font-bold text-gray-900 max-w-4xl'>
              As a globally recognized manufacturer and exporter, Saheeb Trading
              Co offers you a uniquely broad and high-quality range of
              Veterinary, Surgical, Dental, and Equestrian instruments.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='relative w-full shadow-sm border border-gray-100 rounded-lg overflow-hidden'>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src='https://player.vimeo.com/video/1164937276?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1'
                  frameBorder='0'
                  allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title='Saheeb Trading Manufacturing'
                />
              </div>
            </div>
          </FadeIn>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 max-w-5xl'>
            <FadeIn delay={0.4} className='text-sm text-gray-600 space-y-2'>
              <p>
                We are a dedicated team based in Sialkot, known for our
                unwavering commitment to{' '}
                <span className='font-bold text-black'>
                  quality and precision
                </span>
                .
              </p>
              <p>
                Our roots are in craftsmanship and it is our constant endeavour
                to provide{' '}
                <span className='font-bold text-black'>
                  professionals worldwide with tools that they can trust for
                  their critical work.
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className='text-sm text-gray-600 space-y-2'>
              <p>
                We look back on a{' '}
                <span className='font-bold text-black'>
                  legacy starting from 1976
                </span>{' '}
                and have developed into a trusted partner for clients globally,
                combining generations of experience with modern manufacturing
                innovation.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
