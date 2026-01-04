'use client'

import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  return (
    <section className='relative w-full bg-gray-900 text-white'>
      <Carousel className='w-full'>
        <CarouselContent>
          <CarouselItem>
            <div className='relative h-[400px] md:h-[500px] w-full overflow-hidden'>
              {/* Background Image Placeholder */}
              <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10' />
              {/* Replace this div with an actual Image component when asset is available */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544978901-b75c88981441?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />

              <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center'>
                <div className='max-w-2xl space-y-4'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='inline-block bg-kerbl-yellow text-black px-2 py-1 font-bold text-xs uppercase tracking-wide'
                  >
                    New Collection
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className='text-4xl md:text-6xl font-black tracking-tight text-kerbl-yellow italic uppercase'
                  >
                    Winter gloves
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='text-2xl md:text-4xl font-bold text-white'
                  >
                    Protection for cold days &ndash; <br />
                    Winter gloves for every task
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className='text-gray-300 max-w-lg mb-6'
                  >
                    Discover our premium range of thermal gloves designed to
                    keep your hands warm and protected in the harshest
                    conditions.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button className='bg-kerbl-yellow hover:bg-kerbl-yellow-dark text-black font-bold text-lg px-8 py-6 rounded-none transition-transform'>
                      Discover the full range now!
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            {/* Second Slide Placeholder */}
            <div className='relative h-[400px] md:h-[500px] w-full overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10' />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className='relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-end text-right'>
                <div className='max-w-2xl space-y-4'>
                  <h1 className='text-4xl md:text-6xl font-black tracking-tight text-white uppercase italic'>
                    Professional <br />{' '}
                    <span className='text-kerbl-green'>Equipment</span>
                  </h1>
                  <Button className='bg-kerbl-green hover:bg-kerbl-green-dark text-white font-bold text-lg px-8 py-6 rounded-none mt-4'>
                    Shop Now <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* Navigation controls if needed, usually dots for hero */}
        <div className='hidden md:block'>
          <CarouselPrevious className='left-4' />
          <CarouselNext className='right-4' />
        </div>
      </Carousel>
    </section>
  )
}
