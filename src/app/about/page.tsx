import { LegacySection } from '@/components/about/LegacySection'
import { VisionSection } from '@/components/about/VisionSection'
import { ValuesSection } from '@/components/about/ValuesSection'
import { SustainabilitySection } from '@/components/about/SustainabilitySection'
import { CapabilitiesSection } from '@/components/about/CapabilitiesSection'
import { MembershipsSection } from '@/components/about/MembershipsSection'
import { GuidingPurposeSection } from '@/components/about/GuidingPurposeSection'

export const metadata = {
  title: 'About Us | Saheeb Trading Co.',
  description:
    'From a modest workshop in 1976 to a global symbol of craftsmanship and trust. Learn about our legacy, vision, and manufacturing capabilities.',
}

export default function AboutPage() {
  return (
    <main className='min-h-screen pt-20 bg-white'>
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            About <span className='text-primary'>Saheeb</span> Trading Co.
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Sidebar Navigation */}
          <aside className='w-full md:w-64 shrink-0'>
            <nav className='sticky top-24 space-y-1'>
              {[
                'Our Legacy',
                'Vision & Mission',
                'Core Values',
                'Sustainability',
                'Manufacturing',
                'Memberships',
                'Purpose',
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item
                    .toLowerCase()
                    .replace(/ & /g, '-')
                    .replace(/ /g, '-')}`}
                  className='block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary transition-all'
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className='flex-1 space-y-20'>
            <section id='our-legacy'>
              <LegacySection />
            </section>
            <section id='vision-mission'>
              <VisionSection />
            </section>
            <section id='core-values'>
              <ValuesSection />
            </section>
            <section id='sustainability'>
              <SustainabilitySection />
            </section>
            <section id='manufacturing'>
              <CapabilitiesSection />
            </section>
            <section id='memberships'>
              <MembershipsSection />
            </section>
            <section id='purpose'>
              <GuidingPurposeSection />
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
