import { db } from '../../../../db/index'
import { products, subCategories } from '../../../../db/schema'
import { eq } from 'drizzle-orm'

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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return Response.json({ error: 'id is required' }, { status: 400 })
    }

    const linkedProducts = await db
      .select({ id: products.id })
      .from(products)
      .where(eq(products.subCategoryId, id))

    if (linkedProducts.length > 0) {
      return Response.json(
        {
          error:
            'Cannot delete sub-category with assigned products. Reassign products first.',
        },
        { status: 400 },
      )
    }

    const deleted = await db
      .delete(subCategories)
      .where(eq(subCategories.id, id))
      .returning({ id: subCategories.id })

    if (deleted.length === 0) {
      return Response.json({ error: 'Sub-category not found' }, { status: 404 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting sub-category:', error)
    return Response.json(
      { error: 'Failed to delete sub-category' },
      { status: 500 },
    )
  }
}
