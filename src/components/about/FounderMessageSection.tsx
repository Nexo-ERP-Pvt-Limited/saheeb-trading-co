import { FadeIn } from '@/components/ui/motion-wrapper'
import { User } from 'lucide-react'

export function FounderMessageSection() {
  return (
    <section className='py-16 px-4 md:px-8'>
      <div className='max-w-4xl mx-auto'>
        <FadeIn>
          <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight mb-10'>
            Founder&apos;s <span className='text-primary'>Message</span>
          </h2>

          <div className='flex flex-col md:flex-row gap-10 items-start'>
            {/* CEO Image Placeholder */}
            <div className='shrink-0 mx-auto md:mx-0'>
              <div className='w-48 h-56 bg-gray-100 border-2 border-gray-200 flex flex-col items-center justify-center'>
                <User className='h-16 w-16 text-gray-300 mb-2' />
                <span className='text-xs text-gray-400 uppercase tracking-wider font-bold'>
                  CEO Photo
                </span>
              </div>
              <div className='mt-4 text-center'>
                <h3 className='text-lg font-black text-gray-900 uppercase tracking-tight'>
                  Abdul Saheeb
                </h3>
                <p className='text-sm text-primary font-bold uppercase tracking-wider'>
                  Founder &amp; CEO
                </p>
                <p className='text-xs text-gray-500 mt-1'>Saheeb Trading</p>
              </div>
            </div>

            {/* Mission Message */}
            <div className='flex-1'>
              <p className='text-gray-600 leading-relaxed text-base mb-6'>
                Our mission at Saheeb Trading is to enrich the lives of our
                customers by providing them with the highest quality Surgical
                Instruments, Equipments and Services. We believe that when our
                customers are satisfied, we have achieved true success.
              </p>
              <p className='text-gray-600 leading-relaxed text-base mb-6'>
                Every day, we strive to exceed expectations, uphold the highest
                standards of quality, and foster lasting relationships.
                It&apos;s not just about delivering products; it&apos;s about
                enhancing the way people live.
              </p>
              <p className='text-gray-700 font-semibold italic text-base'>
                Thank you for choosing Saheeb Trading as your trusted partner on
                this journey.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
