import { Metadata } from 'next'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { db } from '../../../db/index'
import { exhibitionEvents } from '../../../db/schema'
import { desc } from 'drizzle-orm'

export const metadata: Metadata = {
  title: 'Exhibitions & Events | Saheeb Trading Co.',
  description:
    'Explore our presence at international exhibitions including EuroTier and Ferma Poland. See our journey of innovation in surgical and veterinary instruments.',
}

/* ── Image Placeholder (only for events without images) ── */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className='w-full aspect-video bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center rounded-lg'>
      <ImageIcon className='h-12 w-12 text-gray-300 mb-2' />
      <span className='text-xs text-gray-400 font-bold uppercase tracking-wider'>
        {label}
      </span>
    </div>
  )
}

/* ── Exhibition Image ─────────────────────────────────── */
function ExhibitionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='relative w-full aspect-video rounded-lg overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 120vw, 100vw'
      />
    </div>
  )
}

/* ── Main Page ─────────────────────────────────────────── */

async function getActiveEvents() {
  try {
    const allEvents = await db
      .select()
      .from(exhibitionEvents)
      .orderBy(desc(exhibitionEvents.eventDate))

    return allEvents.filter((event) => event.active)
  } catch {
    return []
  }
}

function eventAnchorId(id: string) {
  return `event-${id}`
}

export default async function ExhibitionsPage() {
  const dynamicEvents = await getActiveEvents()
  const allSidebarEvents = dynamicEvents.map((event) => ({
    id: eventAnchorId(event.id),
    label: event.title,
  }))

  return (
    <main className='min-h-screen pt-20 bg-white'>
      {/* Hero Banner */}
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            Exhibitions &amp; <span className='text-primary'>Events</span>
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
          <p className='text-gray-500 mt-4 max-w-2xl text-lg'>
            Showcasing our legacy of precision and innovation at the
            world&apos;s leading veterinary and livestock exhibitions.
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Sidebar Navigation */}
          <aside className='w-full md:w-64 shrink-0'>
            <nav className='sticky top-24 space-y-1'>
              {allSidebarEvents.map((event) => (
                <a
                  key={event.id}
                  href={`#${event.id}`}
                  className='block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary transition-all'
                >
                  {event.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className='flex-1 space-y-24'>
            {dynamicEvents.map((event) => {
              const imageList =
                Array.isArray(event.images) && event.images.length > 0
                  ? event.images
                  : event.image
                    ? [event.image]
                    : []

              const shortDate = new Date(event.eventDate).toLocaleDateString()
              const descriptionHtml = (event.description || '').trim()

              return (
                <section
                  key={event.id}
                  id={eventAnchorId(event.id)}
                  className='scroll-mt-24'
                >
                  <div className='border-l-4 border-primary pl-6 mb-8'>
                    <span className='text-sm font-bold text-primary uppercase tracking-widest'>
                      {shortDate} · {event.location}
                    </span>
                    <h2 className='text-2xl md:text-3xl font-black text-gray-900 mt-2'>
                      {event.title}
                    </h2>
                  </div>

                  {imageList.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                      {imageList.map((image, index) => (
                        <ExhibitionImage
                          key={`${event.id}-image-${index}`}
                          src={image}
                          alt={`${event.title} image ${index + 1}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className='mb-8'>
                      <ImagePlaceholder label='Event' />
                    </div>
                  )}

                  {descriptionHtml ? (
                    <div
                      className='text-gray-600 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-4 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-gray-900'
                      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                    />
                  ) : (
                    <p className='text-gray-600 leading-relaxed'>
                      Event details will be shared soon.
                    </p>
                  )}
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
