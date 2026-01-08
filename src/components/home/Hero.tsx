'use client'

import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className='relative w-full bg-gray-900 text-white'>
      <Carousel
        plugins={[plugin.current]}
        className='w-full'
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* Slide 1: General Brand Intro */}
          <CarouselItem>
            <div className='relative h-[400px] md:h-[500px] w-full overflow-hidden'>
              {/* Background: Surgical/Medical Theme */}
              <div className='absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-10' />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop')] bg-cover bg-center" />

              <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center'>
                <div className='max-w-2xl space-y-4'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='inline-block bg-kerbl-green text-white px-2 py-1 font-bold text-xs uppercase tracking-wide'
                  >
                    Est. 1976
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className='text-4xl md:text-6xl font-black tracking-tight text-white uppercase italic'
                  >
                    Saheeb <span className='text-kerbl-yellow'>Trading Co</span>
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='text-xl md:text-3xl font-bold text-gray-200'
                  >
                    Generations of Trust & Craftsmanship
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className='text-gray-300 max-w-lg mb-6'
                  >
                    Founded in 1976 in Sialkot. A globally recognized name in
                    Veterinary, Surgical, Dental, and Equestrian instruments.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button className='bg-kerbl-green hover:bg-kerbl-green-dark text-white font-bold text-lg px-8 py-6 rounded-none transition-transform'>
                      Explore Our Products
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Veterinary & Equestrian Focus */}
          <CarouselItem>
            <div className='relative h-[400px] md:h-[500px] w-full overflow-hidden'>
              <div className='absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-10' />
              {/* Background: Horse/Equestrian Theme */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534008745283-9366ec236dbf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-end text-right'>
                <div className='max-w-2xl space-y-4'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='inline-block bg-kerbl-yellow text-black px-2 py-1 font-bold text-xs uppercase tracking-wide ml-auto'
                  >
                    Equestrian Excellence
                  </motion.div>
                  <h1 className='text-4xl md:text-6xl font-black tracking-tight text-white uppercase italic'>
                    Professional <br />{' '}
                    <span className='text-kerbl-green'>Instruments</span>
                  </h1>
                  <p className='text-gray-200 text-lg max-w-lg ml-auto'>
                    High-quality tools for Veterinary and Equestrian
                    professionals worldwide.
                  </p>
                  <Button className='bg-kerbl-green hover:bg-kerbl-green-dark text-white font-bold text-lg px-8 py-6 rounded-none mt-4'>
                    Shop Now <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* Navigation controls */}
        <div className='hidden md:block'>
          <CarouselPrevious className='left-4 h-12 w-12 border-none bg-white/20 hover:bg-kerbl-green text-white hover:text-white transition-all' />
          <CarouselNext className='right-4 h-12 w-12 border-none bg-white/20 hover:bg-kerbl-green text-white hover:text-white transition-all' />
        </div>
      </Carousel>
    </section>
  )
}
