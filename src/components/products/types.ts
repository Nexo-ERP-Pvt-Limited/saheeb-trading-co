export interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

export interface Product {
  id: string
  name: string
  description: string
  price?: number // Optional, as it might be quote-based
  image: string
  category: string
  subCategory?: string
}
