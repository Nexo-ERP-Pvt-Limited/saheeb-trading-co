import { db } from '../../../../../db/index'
import { products } from '../../../../../db/schema'
import { eq } from 'drizzle-orm'

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const body = await req.json()
    const { title, description, sku, image, active, subCategoryId } = body

    if (!title || !sku) {
      return Response.json(
        { error: 'title and sku are required' },
        { status: 400 },
      )
    }

    const [updated] = await db
      .update(products)
      .set({
        title,
        description: description || null,
        sku,
        image: image || null,
        active: active ?? true,
        subCategoryId: subCategoryId || null,
      })
      .where(eq(products.id, id))
      .returning()

    if (!updated) {
      return Response.json({ error: 'Product not found' }, { status: 404 })
    }

    return Response.json({ data: updated })
  } catch (error: any) {
    if (error?.code === '23505') {
      return Response.json(
        { error: 'A product with this SKU already exists' },
        { status: 409 },
      )
    }
    console.error('Error updating product:', error)
    return Response.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const [deleted] = await db
      .delete(products)
      .where(eq(products.id, id))
      .returning()

    if (!deleted) {
      return Response.json({ error: 'Product not found' }, { status: 404 })
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting product:', error)
    return Response.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
