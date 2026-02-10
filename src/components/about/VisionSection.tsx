import { FadeIn } from '@/components/ui/motion-wrapper'

export function VisionSection() {
  return (
    <section className='py-10 px-4 md:px-8 bg-muted/30'>
      <div className='max-w-4xl mx-auto text-center'>
        <FadeIn>
          <h2 className='text-3xl font-bold mb-8 text-foreground'>
            Our Vision
          </h2>
          <p className='text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed'>
            We believe in more than manufacturing instruments—we believe in
            shaping long-lasting partnerships through quality and trust.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
