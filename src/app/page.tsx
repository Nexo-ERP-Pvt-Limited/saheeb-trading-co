import { Hero } from '@/components/home/Hero'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { FeatureSection } from '@/components/home/FeatureSection'
import { VideoSection } from '@/components/home/VideoSection'
import { db } from '../../db/index'

export const dynamic = 'force-dynamic'
import { products, exhibitionEvents } from '../../db/schema'
import { desc } from 'drizzle-orm'

const FEATURED_SKUS = ['J-237', 'E-023', 'A-293', 'B-061']

async function getFeaturedProducts() {
  try {
    const allProducts = await db.select().from(products)
    return FEATURED_SKUS.map((sku) => allProducts.find((p) => p.sku === sku))
      .filter(Boolean)
      .map((p) => ({
        id: p!.id,
        title: p!.title,
        sku: p!.sku,
        image: p!.image,
      }))
  } catch {
    return []
  }
}

async function getLatestEvents() {
  try {
    const events = await db
      .select()
      .from(exhibitionEvents)
      .orderBy(desc(exhibitionEvents.eventDate))
    return events
      .filter((e) => e.active)
      .slice(0, 3)
      .map((e) => ({
        id: e.id,
        title: e.title,
        description: e.description ?? '',
        image:
          Array.isArray(e.images) && e.images.length > 0
            ? e.images[0]
            : (e.image ?? null),
        href: `/exhibitions#event-${e.id}`,
      }))
  } catch {
    return []
  }
}

export default async function Home() {
  const [featuredProducts, latestEvents] = await Promise.all([
    getFeaturedProducts(),
    getLatestEvents(),
  ])

  return (
    <div className='min-h-screen bg-white flex flex-col font-sans'>
      <main className='flex-1'>
        <Hero />
        <CategoryGrid />
        <FeatureSection
          featuredProducts={featuredProducts}
          latestEvents={latestEvents}
        />
        <VideoSection />
      </main>
    </div>
  )
}
