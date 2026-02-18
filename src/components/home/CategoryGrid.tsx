'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from '@/translations'
import type { TranslationKey } from '@/translations'

const categories: { titleKey: TranslationKey; href: string; image: string }[] =
  [
    {
      titleKey: 'category.surgical',
      href: '/products?category=surgical-instruments',
      image: '/images/categories/surgical-instruments.jpg',
    },
    {
      titleKey: 'category.veterinary',
      href: '/products?category=veterinary-tools',
      image: '/images/categories/veterinary-tools.webp',
    },
    {
      titleKey: 'category.dental',
      href: '/products?category=dental-kits',
      image: '/images/categories/15_banner.jpg',
    },
    {
      titleKey: 'category.equestrian',
      href: '/products?category=equestrian-products',
      image: '/images/categories/equestrian-products.webp',
    },
  ]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function CategoryGrid() {
  const { t } = useTranslation()

  return (
    <section className='container mx-auto px-3 mb-20'>
      {/* Desktop: 4 columns, Mobile: 2 columns */}
      <motion.div
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-1'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-50px' }}
      >
        {categories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link
              href={category.href}
              className='group flex flex-col overflow-hidden'
            >
              {/* Green Header */}
              <div className='bg-primary py-3 px-3 mx-1'>
                <h3 className='text-white text-sm font-bold leading-tight'>
                  {t(category.titleKey)}
                </h3>
              </div>

              {/* Category Image */}
              <div className='relative h-28 md:h-32 lg:h-36 bg-gray-100 overflow-hidden mx-1'>
                <Image
                  src={category.image}
                  alt={t(category.titleKey)}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
