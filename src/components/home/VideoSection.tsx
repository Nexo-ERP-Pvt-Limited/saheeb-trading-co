'use client'

import { Play, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/motion-wrapper'
import { motion } from 'framer-motion'

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
            <div className='relative aspect-video w-full bg-black overflow-hidden group cursor-pointer shadow-sm border border-gray-100'>
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className='absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors' />

              {/* Play Button - Clean Kerbl Style */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='w-20 h-20 md:w-24 md:h-24 bg-primary/90 rounded-full flex items-center justify-center shadow-lg border-4 border-white'
                >
                  <Play className='h-10 w-10 text-white fill-white ml-1.5' />
                </motion.div>
              </div>

              {/* Overlays */}
              <div className='absolute top-6 left-6'>
                <div className='bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm'>
                  Saheeb Trading Co
                </div>
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
