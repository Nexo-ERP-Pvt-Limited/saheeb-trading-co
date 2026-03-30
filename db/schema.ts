import { sql } from 'drizzle-orm'
import { pgTable, text, boolean, timestamp, uuid } from 'drizzle-orm/pg-core'

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const subCategories = pgTable('sub_categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  categoryId: uuid('category_id')
    .notNull()
    .references(() => categories.id),
  createdAt: timestamp('created_at').defaultNow(),
})

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  sku: text('sku').notNull().unique(),
  image: text('image'),
  active: boolean('active').default(true),
  subCategoryId: uuid('sub_category_id').references(() => subCategories.id),
  createdAt: timestamp('created_at').defaultNow(),
})

export const exhibitionEvents = pgTable('exhibition_events', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  location: text('location').notNull(),
  description: text('description'),
  image: text('image'),
  images: text('images')
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  eventDate: timestamp('event_date').notNull(),
  active: boolean('active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
})
