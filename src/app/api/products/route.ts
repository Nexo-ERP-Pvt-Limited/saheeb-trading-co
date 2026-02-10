import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const allProducts: unknown[] = []
    let page = 1
    let pageCount = 1

    // Loop through all Strapi pages to fetch every product
    while (page <= pageCount) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=image,sub_category,sub_category.category&pagination[page]=${page}&pagination[pageSize]=25`,
        { cache: 'no-store' },
      )

      if (!res.ok) {
        throw new Error(`Strapi API error: ${res.status}`)
      }

      const json = await res.json()
      allProducts.push(...(json.data || []))

      pageCount = json.meta?.pagination?.pageCount || 1
      page++
    }

    return NextResponse.json({ data: allProducts })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 },
    )
  }
}
