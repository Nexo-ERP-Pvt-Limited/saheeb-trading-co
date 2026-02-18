'use client'

import { LegacySection } from '@/components/about/LegacySection'
import { VisionSection } from '@/components/about/VisionSection'
import { ValuesSection } from '@/components/about/ValuesSection'
import { SustainabilitySection } from '@/components/about/SustainabilitySection'
import { CapabilitiesSection } from '@/components/about/CapabilitiesSection'
import { MembershipsSection } from '@/components/about/MembershipsSection'
import { GuidingPurposeSection } from '@/components/about/GuidingPurposeSection'
import { FounderMessageSection } from '@/components/about/FounderMessageSection'
import { useTranslation } from '@/translations'

export default function AboutPage() {
  const { t } = useTranslation()

  const sidebarItems = [
    { key: 'about.sidebar.legacy' as const, href: '#our-legacy' },
    { key: 'about.sidebar.founder' as const, href: "#founder's-message" },
    { key: 'about.sidebar.vision' as const, href: '#vision-mission' },
    { key: 'about.sidebar.values' as const, href: '#core-values' },
    { key: 'about.sidebar.sustainability' as const, href: '#sustainability' },
    { key: 'about.sidebar.manufacturing' as const, href: '#manufacturing' },
    { key: 'about.sidebar.memberships' as const, href: '#memberships' },
    { key: 'about.sidebar.purpose' as const, href: '#purpose' },
  ]

  return (
    <main className='min-h-screen pt-20 bg-white'>
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            {t('about.title1')}{' '}
            <span className='text-primary'>{t('about.title2')}</span>{' '}
            {t('about.title3')}
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Sidebar Navigation */}
          <aside className='w-full md:w-64 shrink-0'>
            <nav className='sticky top-24 space-y-1'>
              {sidebarItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className='block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary transition-all'
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className='flex-1 space-y-20'>
            <section id='our-legacy'>
              <LegacySection />
            </section>
            <section id="founder's-message">
              <FounderMessageSection />
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
