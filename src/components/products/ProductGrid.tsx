'use client'

import { Product } from './types'
import { ProductCard } from './ProductCard'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-24 text-center'>
        <div className='bg-muted rounded-full p-6 mb-4'>
          <span className='text-4xl'>🔍</span>
        </div>
        <h3 className='text-xl font-semibold mb-2'>No products found</h3>
        <p className='text-muted-foreground max-w-sm mx-auto'>
          We couldn't find any products in this category. Please try checking
          another category.
        </p>
      </div>
    )
  }

  return (
    <div className='space-y-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
