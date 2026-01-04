import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { FeatureSection } from '@/components/home/FeatureSection';
import { Sidebar } from '@/components/home/Sidebar';
import { VideoSection } from '@/components/home/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <main className="flex-1">
        <Hero />
        <CategoryGrid />

        {/* Main Content Area */}
        <section className="container mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Content Column */}
                <div className="lg:col-span-8 xl:col-span-9">
                    <FeatureSection />
                </div>

                {/* Right Sidebar Column */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <Sidebar />
                </div>
            </div>
        </section>

        <VideoSection />
      </main>

    </div>
  );
}
