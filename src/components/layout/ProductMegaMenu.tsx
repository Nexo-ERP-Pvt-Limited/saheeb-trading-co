'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Category } from '@/components/products/types'
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
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    categories[0]?.id || ''
  )

  if (!visible) return null

  const activeCategory = categories.find((c) => c.id === activeCategoryId)

  return (
    <div
      className='absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100 font-sans'
      onMouseLeave={onClose}
    >
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
                      : 'text-gray-600 border-transparent hover:bg-gray-200 hover:text-gray-900'
                  )}
                  onMouseEnter={() => setActiveCategoryId(category.id)}
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
            <div className='grid grid-cols-3 gap-8'>
              {/* NOTE: Since our current data structure only has flat subcategories,
                  we will display them as a list. In the future, if we have grouped subcategories
                  like "Calf Rearing" -> [items], we can map them here.
                  For now, we just list the subcategories.
              */}
              <div className='col-span-3'>
                <h3 className='text-xl font-black text-gray-900 mb-6 uppercase tracking-tight border-b border-gray-100 pb-2'>
                  {activeCategory.name}
                </h3>
              </div>

              {activeCategory.subcategories?.map((sub) => (
                <div key={sub.id} className='space-y-4'>
                  <Link
                    href={`/products?category=${activeCategory.id}&subcategory=${sub.id}`}
                    className='block font-bold text-gray-900 hover:text-primary mb-2 text-base'
                    onClick={onClose}
                  >
                    {sub.name}
                  </Link>
                  {/* Placeholder for deeper links if they existed */}
                  <ul className='space-y-1 text-sm text-gray-500'>
                    <li>
                      <Link
                        href={`/products?category=${activeCategory.id}&subcategory=${sub.id}`}
                        onClick={onClose}
                        className='hover:text-primary hover:underline'
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/products?category=${activeCategory.id}&subcategory=${sub.id}`}
                        onClick={onClose}
                        className='hover:text-primary hover:underline'
                      >
                        Top Sellers
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
