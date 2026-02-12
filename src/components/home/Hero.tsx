'use client'

import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Hero() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  )

  return (
    <section className='relative  w-full mb-0.5 bg-white overflow-hidden'>
      <Carousel
        plugins={[plugin.current]}
        className='w-full'
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* Slide 1: Kerbl-style Split Layout */}
          <CarouselItem>
            <div className='relative w-full'>
              {/* Desktop Layout: Split Green/Image */}
              <div className='hidden md:grid md:grid-cols-2 h-[400px] lg:h-[500px]'>
                {/* Left: Green Overlay with Text */}
                <div className='bg-primary flex items-center justify-center p-8 lg:p-12'>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='max-w-md'
                  >
                    {/* Tagline */}
                    <p className='text-sm lg:text-base font-bold text-gray-700 mb-4'>
                      Quality, precision, and strength
                    </p>
                    {/* Main Heading */}
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6'>
                      Premium
                      <br />
                      instruments
                    </h1>
                    {/* Description */}
                    <p className='text-base lg:text-lg text-gray-600 mb-8 leading-relaxed'>
                      Our premium-quality instruments are backed by a lifetime
                      warranty, giving you peace of mind for the life of your
                      instruments.
                    </p>
                    {/* CTA Button */}
                    <Link href='/products'>
                      <button className='bg-kerbl-yellow text-gray-900 font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow'>
                        Learn more
                      </button>
                    </Link>
                  </motion.div>
                </div>

                {/* Right: Image */}
                <div className='relative'>
                  <Image
                    src='/images/hero-image.jpg'
                    alt='Premium instruments'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              {/* Mobile Layout: Compact Banner */}
              <div className='md:hidden relative h-[200px] w-full'>
                <Image
                  src='/images/hero-image.jpg'
                  alt='Premium instruments'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent' />
                <div className='absolute inset-0 flex items-center px-4'>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='max-w-[200px]'
                  >
                    <h2 className='text-2xl font-black italic text-kerbl-yellow uppercase leading-tight'>
                      Premium instruments
                    </h2>
                    <p className='text-sm text-white mt-1'>
                      Lifetime warranty on all our premium instruments.
                    </p>
                    <Button
                      asChild
                      size='sm'
                      className='bg-kerbl-yellow hover:bg-kerbl-yellow/90 text-black font-bold text-xs px-4 py-2 mt-3 rounded-none'
                    >
                      <Link href='/products'>Discover the full range now!</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Alternative Banner */}
          <CarouselItem>
            <div className='relative w-full'>
              {/* Desktop */}
              <div className='hidden md:grid md:grid-cols-2 h-[400px] lg:h-[500px]'>
                <div className='bg-primary flex items-center justify-center p-8 lg:p-12'>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='max-w-md'
                  >
                    {/* Tagline */}
                    <p className='text-sm lg:text-base font-bold text-gray-700 mb-4'>
                      Since 1976
                    </p>
                    {/* Main Heading */}
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6'>
                      Veterinary
                      <br />
                      excellence
                    </h1>
                    {/* Description */}
                    <p className='text-base lg:text-lg text-black/80 mb-8 leading-relaxed'>
                      Professional instruments crafted with precision for
                      veterinary care and animal welfare.
                    </p>
                    {/* CTA Button */}
                    <Link href='/products'>
                      <button className='bg-kerbl-yellow text-gray-900 font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow'>
                        Explore range
                      </button>
                    </Link>
                  </motion.div>
                </div>
                <div className='relative'>
                  <Image
                    src='/images/hero-image-01.jpg'
                    alt='Veterinary instruments'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className='md:hidden relative h-[200px] w-full'>
                <Image
                  src='/images/hero-image-01.jpg'
                  alt='Professional instruments'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent' />
                <div className='absolute inset-0 flex items-center px-4'>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='max-w-[200px]'
                  >
                    <h2 className='text-2xl font-black italic text-kerbl-yellow uppercase leading-tight'>
                      Professional Tools
                    </h2>
                    <p className='text-sm text-white mt-1'>
                      Precision instruments for veterinary care
                    </p>
                    <Button
                      asChild
                      size='sm'
                      className='bg-kerbl-yellow hover:bg-kerbl-yellow/90 text-black font-bold text-xs px-4 py-2 mt-3 rounded-none'
                    >
                      <Link href='/products'>Explore now!</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Carousel Dots Indicator */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
          <div className='w-2 h-2 rounded-full bg-white/80'></div>
          <div className='w-2 h-2 rounded-full bg-white/40'></div>
        </div>
      </Carousel>
    </section>
  )
}
