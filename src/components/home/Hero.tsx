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
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
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
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight mb-6'>
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
                    <button className='bg-white text-gray-900 font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow'>
                      Learn more
                    </button>
                  </motion.div>
                </div>

                {/* Right: Image */}
                <div className='relative'>
                  <Image
                    src='/images/hero-image.jpg'
                    alt='Chicken coop winter solutions'
                    fill
                    className='object-cover'
                  />
                  {/* CTA Button Overlay */}
                  <div className='absolute bottom-8 right-8'>
                    <Button
                      asChild
                      className='bg-primary/90 hover:bg-primary text-white font-bold text-lg px-8 py-6 rounded-none flex items-center gap-2'
                    >
                      <Link href='/products'>
                        <ChevronRight className='h-5 w-5' />
                        <ChevronRight className='h-5 w-5 -ml-4' />
                        Find out more now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Layout: Compact Banner */}
              <div className='md:hidden relative h-[200px] w-full'>
                <Image
                  src='/images/about-legacy.png'
                  alt='Winter gloves'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent' />
                <div className='absolute inset-0 flex items-center px-4'>
                  <div className='max-w-[200px]'>
                    <h2 className='text-2xl font-black italic text-kerbl-yellow uppercase leading-tight'>
                      Winter gloves
                    </h2>
                    <p className='text-sm text-white mt-1'>
                      Protection for cold days – Winter gloves for every task
                    </p>
                    <Button
                      asChild
                      size='sm'
                      className='bg-kerbl-yellow hover:bg-kerbl-yellow/90 text-black font-bold text-xs px-4 py-2 mt-3 rounded-none'
                    >
                      <Link href='/products'>Discover the full range now!</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2: Alternative Banner */}
          <CarouselItem>
            <div className='relative w-full'>
              {/* Desktop */}
              <div className='hidden md:grid md:grid-cols-2 h-[500px] lg:h-[600px]'>
                <div className='bg-primary flex items-center justify-center p-8 lg:p-12'>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='max-w-md'
                  >
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase leading-tight mb-6'>
                      Professional instruments for veterinary excellence.
                    </h1>
                    <div className='inline-block bg-kerbl-yellow text-primary font-bold px-4 py-2 rounded-full text-sm mb-6'>
                      Since 1976
                    </div>
                  </motion.div>
                </div>
                <div className='relative'>
                  <Image
                    src='/images/surgical-instruments.png'
                    alt='Veterinary instruments'
                    fill
                    className='object-cover'
                  />
                  <div className='absolute bottom-8 right-8'>
                    <Button
                      asChild
                      className='bg-primary/90 hover:bg-primary text-white font-bold text-lg px-8 py-6 rounded-none flex items-center gap-2'
                    >
                      <Link href='/products'>
                        <ChevronRight className='h-5 w-5' />
                        <ChevronRight className='h-5 w-5 -ml-4' />
                        Explore our range
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className='md:hidden relative h-[200px] w-full'>
                <Image
                  src='/images/surgical-instruments.png'
                  alt='Professional instruments'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent' />
                <div className='absolute inset-0 flex items-center px-4'>
                  <div className='max-w-[200px]'>
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
                  </div>
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
