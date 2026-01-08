'use client'

import { Filter, ChevronRight, ChevronDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category } from './types'
import { useState } from 'react'
import { useProductStore } from '@/store/product-store'

interface ProductSidebarProps {
  categories: Category[]
  className?: string
}

export function ProductSidebar({ categories, className }: ProductSidebarProps) {
  const { selectedCategoryId, setSelectedCategoryId } = useProductStore()
  const [openCategories, setOpenCategories] = useState<string[]>(
    categories.map((c) => c.id)
  )

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className={cn('w-full md:w-64 shrink-0 space-y-8', className)}>
      {/* Header */}
      <div className='flex items-center gap-2 mb-6'>
        <Filter className='h-5 w-5 text-kerbl-green' />
        <h2 className='text-xl font-bold'>Collections</h2>
      </div>

      <Button
        className='w-full justify-between bg-kerbl-green text-white hover:bg-kerbl-green-dark mb-6'
        size='lg'
        onClick={() => setSelectedCategoryId(undefined)}
      >
        View All Products
      </Button>

      {/* Categories List */}
      <div className='space-y-6'>
        {categories.map((category) => (
          <div key={category.id} className='space-y-3'>
            <button
              onClick={() => toggleCategory(category.id)}
              className='flex items-center justify-between w-full text-sm font-bold text-muted-foreground uppercase tracking-wider hover:text-kerbl-green transition-colors group'
            >
              {category.name}
              {/* Only show chevron if subcategories exist, though mockup implies standard list behavior */}
            </button>

            {/* Subcategories */}
            {openCategories.includes(category.id) && (
              <div className='flex flex-col space-y-1 pl-0'>
                {category.subcategories?.map((sub) => (
                  <button
                    key={sub.id}
                    className={cn(
                      'flex items-center justify-between w-full py-2 text-base text-left hover:text-kerbl-green transition-colors border-b border-transparent hover:border-kerbl-green/20',
                      selectedCategoryId === sub.id
                        ? 'text-kerbl-green font-medium'
                        : 'text-muted-foreground'
                    )}
                    onClick={() => setSelectedCategoryId(sub.id)}
                  >
                    <span>{sub.name}</span>
                    <ChevronRight className='h-4 w-4 opacity-50' />
                  </button>
                ))}
              </div>
            )}
            <div className='h-px bg-border/50 w-full mt-4' />
          </div>
        ))}
      </div>

      {/* Download Catalog */}
      <Button
        variant='outline'
        className='w-full justify-center gap-2 mt-8 py-6'
        size='lg'
      >
        <Download className='h-4 w-4' />
        Download Catalog
      </Button>
    </div>
  )
}
