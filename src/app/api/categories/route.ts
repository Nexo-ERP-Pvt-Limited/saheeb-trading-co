import { db } from '../../../../db/index'
import { categories, subCategories } from '../../../../db/schema'
import { eq } from 'drizzle-orm'

export async function GET() {
  try {
    const allCategories = await db.select().from(categories)
    const allSubCategories = await db.select().from(subCategories)

    const data = allCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      subcategories: allSubCategories
        .filter((sub) => sub.categoryId === cat.id)
        .map((sub) => ({
          id: sub.id,
          name: sub.name,
          slug: sub.slug,
        })),
    }))

    return Response.json({ data })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return Response.json(
      { error: 'Failed to fetch categories' },
      { status: 500 },
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name } = body

    if (!name) {
      return Response.json({ error: 'name is required' }, { status: 400 })
    }

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const [created] = await db
      .insert(categories)
      .values({ name, slug })
      .returning()

    return Response.json({ data: created })
  } catch (error) {
    console.error('Error creating category:', error)
    return Response.json(
      { error: 'Failed to create category' },
      { status: 500 },
    )
  }
}
