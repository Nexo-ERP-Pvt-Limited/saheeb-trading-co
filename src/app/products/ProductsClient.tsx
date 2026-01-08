'use client'

import { ProductSidebar } from '@/components/products/ProductSidebar'
import { ProductGrid } from '@/components/products/ProductGrid'
import { Category, Product } from '@/components/products/types'
import { useProductStore } from '@/store/product-store'

interface ProductsClientProps {
  categories: Category[]
  products: Product[]
}

export function ProductsClient({ categories, products }: ProductsClientProps) {
  const { selectedCategoryId } = useProductStore()

  const getFilteredProducts = () => {
    if (!selectedCategoryId) return products

    return products.filter((product) => {
      // Find the category object for the selected ID (could be main or sub)

      // 1. Check if selected ID is a main category
      const mainCategory = categories.find((c) => c.id === selectedCategoryId)
      if (mainCategory) {
        return product.category === mainCategory.name
      }

      // 2. Check if selected ID is a subcategory
      for (const cat of categories) {
        const sub = cat.subcategories?.find((s) => s.id === selectedCategoryId)
        if (sub) {
          return product.subCategory === sub.name
        }
      }

      return false
    })
  }

  const displayedProducts = getFilteredProducts()

  return (
    <div className='flex flex-col md:flex-row gap-12 pt-8'>
      {/* Sidebar */}
      <aside className='hidden md:block'>
        <ProductSidebar categories={categories} className='w-full' />
      </aside>

      {/* Mobile Filter Trigger */}
      <div className='md:hidden mb-4'>
        <ProductSidebar categories={categories} className='w-full' />
      </div>

      <div className='flex-1'>
        <ProductGrid products={displayedProducts} />
      </div>
    </div>
  )
}
