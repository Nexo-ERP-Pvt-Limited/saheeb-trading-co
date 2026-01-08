import { FadeIn } from '@/components/ui/motion-wrapper'

export function GuidingPurposeSection() {
  return (
    <section className='py-24 px-4 md:px-8 bg-muted/40'>
      <div className='max-w-3xl mx-auto text-center'>
        <FadeIn>
          <h2 className='text-2xl md:text-3xl font-bold mb-6'>
            Our Guiding Purpose
          </h2>
          <blockquote className='text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed'>
            &ldquo;Every day, we work to elevate the quality of life—for
            professionals, for patients, for animals, and for communities
            worldwide. Our journey is defined by craftsmanship, innovation, and
            a passion for creating products that make a meaningful
            difference.&rdquo;
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
