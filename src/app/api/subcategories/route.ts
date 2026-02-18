import { db } from '../../../../db/index'
import { subCategories } from '../../../../db/schema'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const categoryId = searchParams.get('categoryId')

    const all = await db.select().from(subCategories)
    const result = categoryId
      ? all.filter((sc) => sc.categoryId === categoryId)
      : all

    return Response.json({ data: result })
  } catch (error) {
    console.error('Error fetching sub-categories:', error)
    return Response.json(
      { error: 'Failed to fetch sub-categories' },
      { status: 500 },
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, categoryId } = body

    if (!name || !categoryId) {
      return Response.json(
        { error: 'name and categoryId are required' },
        { status: 400 },
      )
    }

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const [created] = await db
      .insert(subCategories)
      .values({ name, slug, categoryId })
      .returning()

    return Response.json({ data: created })
  } catch (error) {
    console.error('Error creating sub-category:', error)
    return Response.json(
      { error: 'Failed to create sub-category' },
      { status: 500 },
    )
  }
}
