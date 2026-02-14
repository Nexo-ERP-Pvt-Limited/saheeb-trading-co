import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

/* ── Strapi product fetch (server-only) ───────────────── */

interface StrapiProduct {
  id: number
  name: string
  slug: string
  sku: string
  image?: { url: string } | null
  sub_category?: { name: string; category?: { name: string } } | null
}

async function getFeaturedProducts(): Promise<StrapiProduct[]> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&pagination[pageSize]=4&sort=createdAt:desc&filters[image][$notNull]=true`,
      { cache: 'no-store', signal: controller.signal },
    )
    clearTimeout(timeout)

    if (!res.ok) {
      console.error('Featured products API error:', res.status)
      return []
    }
    const json = await res.json()
    return json.data || []
  } catch (err) {
    console.error('Featured products fetch failed:', err)
    return []
  }
}

/* ── Latest Events data ───────────────────────────────── */

const latestEvents = [
  {
    title: 'Ferma Poland 2024',
    summary:
      'Innovation returns to Łódź — 17,985 experts focused on the future of breeding and animal health.',
    image: '/Exhibitions/2024 Ferma poland/2024 Ferma poland-01.jpeg',
    href: '/exhibitions#ferma-2024',
  },
  {
    title: 'EuroTier 2022',
    summary:
      'Over 1,800 exhibitors from 55 countries showcasing next-gen livestock management.',
    image: '/Exhibitions/2022 Eurotier/2022 Eurotier-01.jpeg',
    href: '/exhibitions#eurotier-2022',
  },
  {
    title: 'Ferma Poland 2020',
    summary:
      'Resilience and precision — a standout memory emphasizing biosecurity and durability.',
    image: '/Exhibitions/2020 ferma poland/2020 ferma poland-01.jpeg',
    href: '/exhibitions#ferma-2020',
  },
]

/* ── Component ────────────────────────────────────────── */

export async function FeatureSection() {
  const products = await getFeaturedProducts()

  return (
    <section className='container mx-auto px-4 py-16'>
      {/* ─── Featured Products ─────────────────────────── */}
      <div className='mb-20'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>
              Featured <span className='text-primary'>Products</span>
            </h2>
            <div className='w-16 h-1 bg-primary mt-2' />
          </div>
          <Link
            href='/products'
            className='hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all'
          >
            View All Products <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        {products.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {products.map((product) => (
              <Link key={product.id} href='/products' className='group block'>
                {/* Image */}
                <div className='relative aspect-square bg-gray-50 border border-gray-100 rounded-lg overflow-hidden mb-3'>
                  {product.image?.url ? (
                    <Image
                      src={product.image.url}
                      alt={product.name}
                      fill
                      className='object-contain p-4 group-hover:scale-105 transition-transform duration-500'
                      sizes='(max-width: 768px) 50vw, 25vw'
                    />
                  ) : (
                    <div className='flex items-center justify-center h-full text-gray-300 text-sm'>
                      No Image
                    </div>
                  )}
                </div>

                {/* Info */}
                <p className='font-bold text-gray-800 text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2'>
                  {product.name}
                </p>
                {product.sub_category?.category?.name && (
                  <p className='text-xs text-gray-400 mt-1'>
                    {product.sub_category.category.name}
                  </p>
                )}
                {product.sku && (
                  <p className='text-xs text-gray-400'>SKU: {product.sku}</p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className='text-gray-400 text-center py-12'>Products loading...</p>
        )}

        {/* Mobile link */}
        <div className='mt-6 md:hidden text-center'>
          <Link
            href='/products'
            className='inline-flex items-center gap-2 text-primary font-bold text-sm'
          >
            View All Products <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>

      {/* ─── Latest Exhibitions / Events ───────────────── */}
      <div>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight'>
              Latest <span className='text-primary'>Events</span>
            </h2>
            <div className='w-16 h-1 bg-primary mt-2' />
          </div>
          <Link
            href='/exhibitions'
            className='hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all'
          >
            View All Events <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {latestEvents.map((event, i) => (
            <Link key={i} href={event.href} className='group block'>
              {/* Image */}
              <div className='relative h-52 rounded-lg overflow-hidden mb-4'>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                <h3 className='absolute bottom-4 left-4 text-white font-black text-lg uppercase tracking-tight'>
                  {event.title}
                </h3>
              </div>

              {/* Summary */}
              <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                {event.summary}
              </p>
              <span className='inline-flex items-center gap-1 text-primary font-bold text-sm mt-2 group-hover:gap-2 transition-all'>
                Read More <ArrowRight className='h-3.5 w-3.5' />
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
            View All Events <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
