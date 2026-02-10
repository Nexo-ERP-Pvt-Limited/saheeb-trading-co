import { FadeIn, SlideInLeft } from '@/components/ui/motion-wrapper'
import { Hammer, Users, Warehouse } from 'lucide-react'

export function CapabilitiesSection() {
  return (
    <section className=' text-black py-10 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <FadeIn>
          <h2 className='text-3xl font-bold mb-6'>Manufacturing Capability</h2>
          <p className='text-black max-w-3xl mb-12'>
            Our facilities are equipped with advanced machinery and modern
            manufacturing systems, enabling precision, consistency, and scalable
            production.
          </p>
        </FadeIn>

        <div className='grid lg:grid-cols-2 gap-16'>
          <SlideInLeft>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {[
                'CNC machines (Horizontal & Vertical)',
                'Die cutting & making machines',
                'Metal press (Hydraulic & Quick Action)',
                'Lathe machines',
                'Milling machines',
                'Grinding machines',
                'Polishing stations',
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors'
                >
                  <Hammer className='w-4 h-4 text-kerbl-green shrink-0' />
                  <span className='text-sm font-medium'>{item}</span>
                </div>
              ))}
            </div>
          </SlideInLeft>

          <div className='space-y-12'>
            <div>
              <h3 className='text-xl font-semibold mb-6 text-kerbl-green'>
                Our Team
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <FadeIn delay={0.2}>
                  <div className='p-6 bg-white/5 rounded-xl border border-white/10 text-center'>
                    <div className='text-4xl font-bold mb-1'>50+</div>
                    <div className='text-sm text-slate-400'>
                      Permanent Employees
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className='p-6 bg-white/5 rounded-xl border border-white/10 text-center'>
                    <div className='text-4xl font-bold mb-1'>75+</div>
                    <div className='text-sm text-slate-400'>
                      Skilled Technicians
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
