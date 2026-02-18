import { Hero } from '@/components/home/Hero'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { FeatureSection } from '@/components/home/FeatureSection'
import { VideoSection } from '@/components/home/VideoSection'
import { db } from '../../db/index'
import { products } from '../../db/schema'

async function getFeaturedProducts() {
  try {
    const allProducts = await db.select().from(products)
    return allProducts.slice(0, 4).map((p) => ({
      id: p.id,
      title: p.title,
      sku: p.sku,
      image: p.image,
    }))
  } catch {
    return []
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div className='min-h-screen bg-white flex flex-col font-sans'>
      <main className='flex-1'>
        <Hero />
        <CategoryGrid />
        <FeatureSection featuredProducts={featuredProducts} />
        <VideoSection />
      </main>
    </div>
  )
}
