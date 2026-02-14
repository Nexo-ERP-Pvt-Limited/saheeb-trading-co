import { CategorySidebarSkeleton } from '@/components/products/CategorySidebarSkeleton'
import { ProductGridSkeleton } from '@/components/products/ProductGridSkeleton'

export default function Loading() {
  return (
    <main className='min-h-screen pt-20 pb-20 bg-background'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row gap-12 pt-8'>
          {/* Sidebar Skeleton */}
          <aside className='hidden md:block'>
            <CategorySidebarSkeleton />
          </aside>

          {/* Mobile Sidebar Skeleton (simplified) */}
          <div className='md:hidden mb-4'>
            <CategorySidebarSkeleton />
          </div>

          <div className='flex-1'>
            <ProductGridSkeleton />
          </div>
        </div>
      </div>
    </main>
  )
}
