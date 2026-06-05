'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ImageIcon } from 'lucide-react'

import { FeaturedProducts } from './FeaturedProducts'
import { useTranslation } from '@/translations'

interface FeaturedProduct {
  id: string
  title: string
  sku: string
  image: string | null
}

interface LatestEvent {
  id: string
  title: string
  description: string
  image: string | null
  href: string
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

/* ── Component ────────────────────────────────────────── */

export function FeatureSection({
  featuredProducts,
  latestEvents,
}: {
  featuredProducts: FeaturedProduct[]
  latestEvents: LatestEvent[]
}) {
  const { t } = useTranslation()

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
          {latestEvents.map((event) => (
            <Link key={event.id} href={event.href} className='group block'>
              {/* Image */}
              <div className='relative h-52 rounded-lg overflow-hidden mb-4 bg-gray-100'>
                {event.image ? (
                  <>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent' />
                    <h3 className='absolute bottom-4 left-4 text-white font-black text-lg uppercase tracking-tight'>
                      {event.title}
                    </h3>
                  </>
                ) : (
                  <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                    <ImageIcon className='h-10 w-10 text-gray-300' />
                    <span className='text-xs text-gray-400 font-bold uppercase tracking-wider px-4 text-center'>
                      {event.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Summary */}
              <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                {stripHtml(event.description) || 'Event details coming soon.'}
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
