// Frontend types

export interface SubCategory {
  id: string | number
  name: string
  slug?: string
}

export interface Category {
  id: string | number
  name: string
  subcategories: SubCategory[]
}

export interface Product {
  id: string | number
  name: string
  slug?: string
  sku?: string
  description?: string | null
  image?: string | null
  category?: string
  subCategory?: string
  categoryName?: string
  subCategoryName?: string
  subCategorySlug?: string
}
