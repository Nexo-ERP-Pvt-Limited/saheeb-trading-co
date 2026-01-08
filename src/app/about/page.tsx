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
    <main className='min-h-screen pt-20'>
      <div className='bg-primary/5 py-24 px-4 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          About Saheeb Trading Co.
        </h1>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          From a modest workshop in 1976 to a global symbol of craftsmanship and
          trust.
        </p>
      </div>

      <LegacySection />
      <VisionSection />
      <ValuesSection />
      <SustainabilitySection />
      <CapabilitiesSection />
      <MembershipsSection />
      <GuidingPurposeSection />
    </main>
  )
}
