'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Category } from '@/components/products/types'
import { useProductStore } from '@/store/product-store'
import { cn } from '@/lib/utils'

interface ProductMegaMenuProps {
  categories: Category[]
  visible: boolean
  onClose: () => void
}

export function ProductMegaMenu({
  categories,
  visible,
  onClose,
}: ProductMegaMenuProps) {
  const router = useRouter()
  const { setSelectedCategoryId, setSearchQuery } = useProductStore()
  const [activeCategoryId, setActiveCategoryId] = useState<
    string | number | null
  >(null)

  if (!visible || categories.length === 0) return null

  const activeCategory = categories.find((c) => c.id === activeCategoryId)

  const handleSubcategoryClick = (subId: string | number) => {
    setSearchQuery('')
    setSelectedCategoryId(subId)
    onClose()
    router.push('/products')
  }

  return (
    <div className='absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100 font-sans'>
      <div className='container mx-auto flex h-[500px]'>
        {/* Sidebar */}
        <div className='w-1/4 bg-gray-100 py-6 overflow-y-auto'>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={cn(
                    'w-full text-left px-6 py-3 text-sm font-bold transition-colors border-l-4',
                    activeCategoryId === category.id
                      ? 'bg-white text-primary border-primary'
                      : 'text-gray-600 border-transparent hover:bg-gray-200 hover:text-gray-900',
                  )}
                  onClick={() =>
                    setActiveCategoryId(
                      activeCategoryId === category.id ? null : category.id,
                    )
                  }
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className='w-3/4 p-8 overflow-y-auto bg-white'>
          {activeCategory && (
            <div>
              <h3 className='text-xl font-black text-gray-900 mb-6 uppercase tracking-tight border-b border-gray-100 pb-2'>
                {activeCategory.name}
              </h3>

              <div className='grid grid-cols-3 gap-x-8 gap-y-3'>
                {activeCategory.subcategories?.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubcategoryClick(sub.id)}
                    className='text-left text-sm font-medium text-gray-600 hover:text-primary py-2 px-3 rounded hover:bg-primary/5 transition-colors'
                  >
                    {sub.name}
                  </button>
                ))}
              </div>

              {(!activeCategory.subcategories ||
                activeCategory.subcategories.length === 0) && (
                <div className='flex flex-col items-center justify-center py-16 text-center'>
                  <span className='text-3xl mb-3'>✨</span>
                  <p className='text-lg font-semibold text-gray-400'>
                    Coming Soon
                  </p>
                  <p className='text-sm text-gray-300 mt-1'>
                    Products in this category are on the way!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
