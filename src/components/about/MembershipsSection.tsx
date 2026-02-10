import { FadeIn } from '@/components/ui/motion-wrapper'

export function MembershipsSection() {
  return (
    <section className='px-4 md:px-8 text-center max-w-4xl mx-auto'>
      <FadeIn>
        <h2 className='text-2xl font-bold mb-12'>Industry Memberships</h2>
        <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500'>
          {/* Since we don't have logos, we'll use styled text placeholders that look professional */}
          <div className='text-lg font-semibold text-muted-foreground/80 hover:text-foreground transition-colors'>
            Sialkot Chamber of Commerce & Industry
          </div>
          <div className='h-2 w-2 rounded-full bg-border hidden md:block' />
          <div className='text-lg font-semibold text-muted-foreground/80 hover:text-foreground transition-colors'>
            Surgical Instruments Manufacturers Association
          </div>
          <div className='h-2 w-2 rounded-full bg-border hidden md:block' />
          <div className='text-lg font-semibold text-muted-foreground/80 hover:text-foreground transition-colors'>
            Sialkot International Airport Limited
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
