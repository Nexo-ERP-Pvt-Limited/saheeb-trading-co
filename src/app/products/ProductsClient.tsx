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
  const { selectedCategoryId, searchQuery } = useProductStore()

  const getFilteredProducts = () => {
    let filtered = products

    // Filter by category
    if (selectedCategoryId) {
      for (const cat of categories) {
        const sub = cat.subcategories?.find((s) => s.id === selectedCategoryId)
        if (sub) {
          filtered = filtered.filter(
            (product) => product.subCategorySlug === sub.slug,
          )
          break
        }
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter((product) => {
        const name = product.name?.toLowerCase() || ''
        const sku = product.sku?.toLowerCase() || ''
        const description = product.description?.toLowerCase() || ''
        const categoryName = product.categoryName?.toLowerCase() || ''
        const subCategoryName = product.subCategoryName?.toLowerCase() || ''
        return (
          name.includes(query) ||
          sku.includes(query) ||
          description.includes(query) ||
          categoryName.includes(query) ||
          subCategoryName.includes(query)
        )
      })
    }

    return filtered
  }

  const displayedProducts = getFilteredProducts()

  return (
    <div className='flex flex-col md:flex-row gap-12 pt-2 md:pt-8'>
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
