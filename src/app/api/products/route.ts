import { db } from '../../../../db/index'
import { products } from '../../../../db/schema'

export async function GET() {
  try {
    const allProducts = await db.select().from(products)
    return Response.json(allProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, description, sku, image, active, subCategoryId } = body

    if (!title || !sku) {
      return Response.json(
        { error: 'title and sku are required' },
        { status: 400 },
      )
    }

    const [created] = await db
      .insert(products)
      .values({
        title,
        description: description || null,
        sku,
        image: image || null,
        active: active ?? true,
        subCategoryId: subCategoryId || null,
      })
      .returning()

    return Response.json({ data: created })
  } catch (error: any) {
    // Handle unique constraint violation on SKU
    if (error?.code === '23505') {
      return Response.json(
        { error: 'A product with this SKU already exists' },
        { status: 409 },
      )
    }
    console.error('Error creating product:', error)
    return Response.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
