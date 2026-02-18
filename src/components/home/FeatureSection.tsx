'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { FeaturedProducts } from './FeaturedProducts'
import { useTranslation } from '@/translations'
import type { TranslationKey } from '@/translations'

interface FeaturedProduct {
  id: string
  title: string
  sku: string
  image: string | null
}

/* ── Component ────────────────────────────────────────── */

export function FeatureSection({
  featuredProducts,
}: {
  featuredProducts: FeaturedProduct[]
}) {
  const { t } = useTranslation()

  const latestEvents: {
    titleKey: TranslationKey
    summaryKey: TranslationKey
    image: string
    href: string
  }[] = [
    {
      titleKey: 'feature.event1.title',
      summaryKey: 'feature.event1.summary',
      image: '/Exhibitions/2024 Ferma poland/2024 Ferma poland-01.jpeg',
      href: '/exhibitions#ferma-2024',
    },
    {
      titleKey: 'feature.event2.title',
      summaryKey: 'feature.event2.summary',
      image: '/Exhibitions/2022 Eurotier/2022 Eurotier-01.jpeg',
      href: '/exhibitions#eurotier-2022',
    },
    {
      titleKey: 'feature.event3.title',
      summaryKey: 'feature.event3.summary',
      image: '/Exhibitions/2020 ferma poland/2020 ferma poland-01.jpeg',
      href: '/exhibitions#ferma-2020',
    },
  ]

  return (
    <section className='container mx-auto px-4 py-16'>
      {/* ─── Featured Products ─────────────────────────── */}
      <div className='mb-20'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>
              {t('feature.featuredProducts')}{' '}
              <span className='text-primary'>
                {t('feature.featuredProductsHighlight')}
              </span>
            </h2>
            <div className='w-16 h-1 bg-primary mt-2' />
          </div>
          <Link
            href='/products'
            className='hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all'
          >
            {t('feature.viewAllProducts')} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <FeaturedProducts products={featuredProducts} />

        {/* Mobile link */}
        <div className='mt-6 md:hidden text-center'>
          <Link
            href='/products'
            className='inline-flex items-center gap-2 text-primary font-bold text-sm'
          >
            {t('feature.viewAllProducts')} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>

      {/* ─── Latest Exhibitions / Events ───────────────── */}
      <div>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>
              {t('feature.latestEvents')}{' '}
              <span className='text-primary'>
                {t('feature.latestEventsHighlight')}
              </span>
            </h2>
            <div className='w-16 h-1 bg-primary mt-2' />
          </div>
          <Link
            href='/exhibitions'
            className='hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all'
          >
            {t('feature.viewAllEvents')} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {latestEvents.map((event, i) => (
            <Link key={i} href={event.href} className='group block'>
              {/* Image */}
              <div className='relative h-52 rounded-lg overflow-hidden mb-4'>
                <Image
                  src={event.image}
                  alt={t(event.titleKey)}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                <h3 className='absolute bottom-4 left-4 text-white font-black text-lg uppercase tracking-tight'>
                  {t(event.titleKey)}
                </h3>
              </div>

              {/* Summary */}
              <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                {t(event.summaryKey)}
              </p>
              <span className='inline-flex items-center gap-1 text-primary font-bold text-sm mt-2 group-hover:gap-2 transition-all'>
                {t('feature.readMore')} <ArrowRight className='h-3.5 w-3.5' />
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile link */}
        <div className='mt-6 md:hidden text-center'>
          <Link
            href='/exhibitions'
            className='inline-flex items-center gap-2 text-primary font-bold text-sm'
          >
            {t('feature.viewAllEvents')} <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
