import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=sub_categories`,
      { cache: 'no-store' },
    )

    if (!res.ok) {
      throw new Error(`Strapi API error: ${res.status}`)
    }

    const json = await res.json()
    return NextResponse.json(json)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 },
    )
  }
}
