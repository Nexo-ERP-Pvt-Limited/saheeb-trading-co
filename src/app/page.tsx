import { Hero } from '@/components/home/Hero'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { FeatureSection } from '@/components/home/FeatureSection'
import { Sidebar } from '@/components/home/Sidebar'
import { VideoSection } from '@/components/home/VideoSection'

export default function Home() {
  return (
    <div className='min-h-screen bg-white flex flex-col font-sans'>
      <main className='flex-1'>
        <Hero />
        <CategoryGrid />
        <FeatureSection />

        {/* Main Content Area - Temporarily commented out Sidebar/Grid structure as FeatureSection moved up and Sidebar wasn't requested in this view.
            Keeping sections clean. If Sidebar is needed, we can re-add it below.
        */}
        {/*
        <section className="container mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 xl:col-span-9">

                </div>
                <div className="lg:col-span-4 xl:col-span-3">
                    <Sidebar />
                </div>
            </div>
        </section>
        */}

        <VideoSection />
      </main>
    </div>
  )
}
