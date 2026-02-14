import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const allCategories: unknown[] = []
    let page = 1
    let pageCount = 1

    // Loop through all Strapi pages to fetch every category
    while (page <= pageCount) {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 30000)

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=sub_categories&pagination[page]=${page}&pagination[pageSize]=25`,
          { cache: 'no-store', signal: controller.signal },
        )
        clearTimeout(timeout)

        if (!res.ok) {
          throw new Error(`Strapi API error: ${res.status}`)
        }

        const json = await res.json()
        allCategories.push(...(json.data || []))

        pageCount = json.meta?.pagination?.pageCount || 1
        page++
      } catch (innerError) {
        clearTimeout(timeout)
        throw innerError
      }
    }

    return NextResponse.json({ data: allCategories })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 },
    )
  }
}
