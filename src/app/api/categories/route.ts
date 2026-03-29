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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return Response.json({ error: 'id is required' }, { status: 400 })
    }

    const linkedSubCategories = await db
      .select({ id: subCategories.id })
      .from(subCategories)
      .where(eq(subCategories.categoryId, id))

    if (linkedSubCategories.length > 0) {
      return Response.json(
        {
          error:
            'Cannot delete category with existing sub-categories. Remove sub-categories first.',
        },
        { status: 400 },
      )
    }

    const deleted = await db
      .delete(categories)
      .where(eq(categories.id, id))
      .returning({ id: categories.id })

    if (deleted.length === 0) {
      return Response.json({ error: 'Category not found' }, { status: 404 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting category:', error)
    return Response.json(
      { error: 'Failed to delete category' },
      { status: 500 },
    )
  }
}
