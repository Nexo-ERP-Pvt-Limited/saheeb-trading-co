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
          <h2 className='text-3xl md:text-4xl font-normal text-gray-800'>
            Your Animal Experts
          </h2>
        </FadeIn>

        <div className='space-y-4'>
          <FadeIn delay={0.2}>
            <p className='font-bold text-gray-900 max-w-4xl'>
              As a producer and wholesaler, the Kerbl Group offers you a
              uniquely broad, efficient and up-to-date range of accessories for
              animal breeding and husbandry.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='relative aspect-video w-full max-w-5xl bg-black rounded-sm overflow-hidden group cursor-pointer shadow-lg'>
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors' />

              {/* Play Button */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 border-2 border-white/50'
                >
                  <Play className='h-10 w-10 md:h-12 md:w-12 text-white fill-white ml-2' />
                </motion.div>
              </div>

              {/* Overlays */}
              <div className='absolute top-4 left-4 flex gap-2'>
                <div className='bg-black/60 text-white px-2 py-1 text-xs rounded-sm backdrop-blur-sm'>
                  KERBL imagefilm
                </div>
              </div>

              <div className='absolute top-4 right-4 flex flex-col gap-2'>
                <Button
                  size='icon'
                  variant='ghost'
                  className='text-white hover:bg-black/40 hover:text-white'
                >
                  <Heart className='h-6 w-6' />
                </Button>
              </div>
            </div>
          </FadeIn>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 max-w-5xl'>
            <FadeIn delay={0.4} className='text-sm text-gray-600 space-y-2'>
              <p>
                We are a family business led by the owner Albert Kerbl, who is
                well known for being a{' '}
                <span className='font-bold text-black'>reliable partner</span>.
              </p>
              <p>
                Our roots are in animal husbandry and it is our constant
                endeavour to make your{' '}
                <span className='font-bold text-black'>
                  daily work as farmers, breeders and animal lovers easier with
                  new solutions and innovations.
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className='text-sm text-gray-600 space-y-2'>
              <p>
                We can already look back on a{' '}
                <span className='font-bold text-black'>
                  success story of more than 40 years
                </span>{' '}
                and since the foundation of Albert Kerbl GmbH in 1984, we have
                developed into a &quot;global player&quot; with foresight,
                market knowledge and a high level of innovation.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
