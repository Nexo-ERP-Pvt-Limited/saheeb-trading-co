import { FadeIn } from '@/components/ui/motion-wrapper'
import Image from 'next/image'

export function FounderMessageSection() {
  return (
    <section className='py-16 px-4 md:px-8'>
      <div className='max-w-4xl mx-auto'>
        <FadeIn>
          <h2 className='text-3xl font-black text-gray-900 uppercase tracking-tight mb-10'>
            Founder&apos;s <span className='text-primary'>Message</span>
          </h2>

          <div className='flex flex-col md:flex-row gap-10 items-start'>
            {/* CEO Image */}
            <div className='shrink-0 mx-auto md:mx-0'>
              <div className='w-48 h-56 relative overflow-hidden border-2 border-gray-200'>
                <Image
                  src='/images/founder.png'
                  alt='Abdul Saheeb - Founder & CEO'
                  fill
                  className='object-cover'
                />
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
                At Saheeb Trading, our mission is to enrich the lives of
                healthcare and veterinary professionals by delivering surgical
                instruments, equipment, and services of the highest caliber. We
                believe that our success is measured solely by the satisfaction
                and confidence of our customers.
              </p>
              <p className='text-gray-600 leading-relaxed text-base mb-6'>
                Every day, we strive to exceed global standards and foster
                lasting partnerships built on reliability. For us, it isn't just
                about delivering a product; it’s about providing the precision
                tools that enhance outcomes and empower the hands that use them.
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
