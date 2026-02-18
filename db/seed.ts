import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { categories, subCategories, products } from './schema'

dotenv.config({ path: '.env.local' })

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const db = drizzle(pool)

// ─── Categories ────────────────────────────────────────
const seedCategories = [{ name: 'Veterinary Items', slug: 'veterinary-items' }]

// ─── Sub-Categories ────────────────────────────────────
// Use the EXACT category slug from above in `categorySlug` to link them
const seedSubCategories = [
  { name: 'Hoof Knife', slug: 'hoof-knife', categorySlug: 'veterinary-items' },
]

// ─── Products ──────────────────────────────────────────
// Use the EXACT sub-category slug from above in `subCategorySlug` to link them
// Set subCategorySlug to null if the product has no sub-category
const seedProducts = [
  {
    title: 'Hoof Knife',
    description: ' Hoof knife SS Blade Wooden Handle Narrow Single Right',
    sku: 'A-001',
    image:
      'https://res.cloudinary.com/dku8frqhb/image/upload/v1771413591/saheeb-trading-co/hoof-knife/hoof-knife-a001_hqa91h.jpg',
    active: true,
    subCategorySlug: 'hoof-knife',
  },
]

// ─── Seed Runner ───────────────────────────────────────
async function seed() {
  console.log('🌱 Seeding database...\n')

  // 1. Insert categories
  console.log(`📁 Inserting ${seedCategories.length} categories...`)
  const insertedCategories = await db
    .insert(categories)
    .values(seedCategories)
    .returning({ id: categories.id, slug: categories.slug })

  const categoryMap = new Map(insertedCategories.map((c) => [c.slug, c.id]))
  console.log(`   ✅ Done\n`)

  // 2. Insert sub-categories (resolve categorySlug → categoryId)
  console.log(`📂 Inserting ${seedSubCategories.length} sub-categories...`)
  const subCatValues = seedSubCategories.map((sc) => {
    const categoryId = categoryMap.get(sc.categorySlug)
    if (!categoryId) {
      throw new Error(
        `Category slug "${sc.categorySlug}" not found for sub-category "${sc.name}"`,
      )
    }
    return { name: sc.name, slug: sc.slug, categoryId }
  })

  const insertedSubCategories = await db
    .insert(subCategories)
    .values(subCatValues)
    .returning({ id: subCategories.id, slug: subCategories.slug })

  const subCategoryMap = new Map(
    insertedSubCategories.map((sc) => [sc.slug, sc.id]),
  )
  console.log(`   ✅ Done\n`)

  // 3. Insert products (resolve subCategorySlug → subCategoryId)
  console.log(`📦 Inserting ${seedProducts.length} products...`)
  const productValues = seedProducts.map((p) => {
    let subCategoryId: string | null = null
    if (p.subCategorySlug) {
      subCategoryId = subCategoryMap.get(p.subCategorySlug) ?? null
      if (!subCategoryId) {
        throw new Error(
          `Sub-category slug "${p.subCategorySlug}" not found for product "${p.title}"`,
        )
      }
    }
    return {
      title: p.title,
      description: p.description,
      sku: p.sku,
      image: p.image,
      active: p.active,
      subCategoryId,
    }
  })

  await db.insert(products).values(productValues)
  console.log(`   ✅ Done\n`)

  console.log('🎉 Seeding complete!')
  await pool.end()
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
