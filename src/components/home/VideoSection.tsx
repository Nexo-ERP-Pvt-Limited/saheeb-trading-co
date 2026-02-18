'use client'

import { FadeIn } from '@/components/ui/motion-wrapper'
import { useTranslation } from '@/translations'

export function VideoSection() {
  const { t } = useTranslation()

  return (
    <section className='container mx-auto px-4 mb-20 font-sans'>
      <div className='space-y-6'>
        <FadeIn>
          <h2 className='text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            {t('video.heading1')}{' '}
            <span className='text-primary'>{t('video.heading2')}</span>{' '}
            {t('video.heading3')}
          </h2>
          <div className='w-20 h-1 bg-primary mt-4 mb-8' />
        </FadeIn>

        <div className='space-y-4'>
          <FadeIn delay={0.2}>
            <p className='font-bold text-gray-900 max-w-4xl'>
              {t('video.intro')}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='relative w-full shadow-sm border border-gray-100 rounded-lg overflow-hidden'>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src='https://player.vimeo.com/video/1164945669?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1'
                  frameBorder='0'
                  allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title='Untitled video - Made with Clipchamp'
                />
              </div>
            </div>
          </FadeIn>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 max-w-5xl'>
            <FadeIn delay={0.4} className='text-sm text-gray-600 space-y-2'>
              <p>
                {t('video.para1a')}{' '}
                <span className='font-bold text-black'>
                  {t('video.para1b')}
                </span>
                .
              </p>
              <p>
                {t('video.para2a')}{' '}
                <span className='font-bold text-black'>
                  {t('video.para2b')}
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={0.5} className='text-sm text-gray-600 space-y-2'>
              <p>
                {t('video.para3a')}{' '}
                <span className='font-bold text-black'>
                  {t('video.para3b')}
                </span>{' '}
                {t('video.para3c')}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
