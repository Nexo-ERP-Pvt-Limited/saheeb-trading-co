// Strapi response types
export interface StrapiImage {
  url: string
  alternativeText?: string
  width?: number
  height?: number
}

export interface StrapiSubCategory {
  id: number
  documentId: string
  name: string
  slug: string
  category?: StrapiCategory
}

export interface StrapiCategory {
  id: number
  documentId: string
  name: string
  sub_categories?: StrapiSubCategory[]
}

export interface StrapiProduct {
  id: number
  documentId: string
  name: string
  slug: string
  sku: string
  description: string | null
  image: StrapiImage | null
  sub_category: StrapiSubCategory | null
}

// Frontend types (compatible with both static data and Strapi)
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
