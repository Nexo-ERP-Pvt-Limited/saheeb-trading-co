import { db } from '../../../../../db/index'
import { exhibitionEvents } from '../../../../../db/schema'
import { eq } from 'drizzle-orm'

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
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

    const [updated] = await db
      .update(exhibitionEvents)
      .set({
        title,
        location,
        description: description || null,
        image: normalizedImages[0] || null,
        images: normalizedImages,
        eventDate: parsedEventDate,
        active: active ?? true,
      })
      .where(eq(exhibitionEvents.id, id))
      .returning()

    if (!updated) {
      return Response.json({ error: 'Event not found' }, { status: 404 })
    }

    return Response.json({ data: updated })
  } catch (error) {
    console.error('Error updating event:', error)
    return Response.json({ error: 'Failed to update event' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const [deleted] = await db
      .delete(exhibitionEvents)
      .where(eq(exhibitionEvents.id, id))
      .returning({ id: exhibitionEvents.id })

    if (!deleted) {
      return Response.json({ error: 'Event not found' }, { status: 404 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting event:', error)
    return Response.json({ error: 'Failed to delete event' }, { status: 500 })
  }
}
