import { db } from '../../../../db/index'
import { exhibitionEvents } from '../../../../db/schema'
import { desc } from 'drizzle-orm'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const activeOnly = searchParams.get('active') === 'true'

    const allEvents = await db
      .select()
      .from(exhibitionEvents)
      .orderBy(desc(exhibitionEvents.eventDate))

    const data = activeOnly
      ? allEvents.filter((event) => event.active)
      : allEvents

    return Response.json({ data })
  } catch (error) {
    console.error('Error fetching events:', error)
    return Response.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, location, description, image, images, eventDate, active } =
      body

    if (!title || !location || !eventDate) {
      return Response.json(
        { error: 'title, location and eventDate are required' },
        { status: 400 },
      )
    }

    const parsedEventDate = new Date(eventDate)
    if (Number.isNaN(parsedEventDate.getTime())) {
      return Response.json({ error: 'Invalid eventDate' }, { status: 400 })
    }

    const normalizedImages = Array.isArray(images)
      ? images.filter((value): value is string => typeof value === 'string')
      : typeof image === 'string' && image
        ? [image]
        : []

    const [created] = await db
      .insert(exhibitionEvents)
      .values({
        title,
        location,
        description: description || null,
        image: normalizedImages[0] || null,
        images: normalizedImages,
        eventDate: parsedEventDate,
        active: active ?? true,
      })
      .returning()

    return Response.json({ data: created })
  } catch (error) {
    console.error('Error creating event:', error)
    return Response.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
