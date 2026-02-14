import { Skeleton } from '@/components/ui/skeleton'
import { Filter } from 'lucide-react'

export function CategorySidebarSkeleton() {
  return (
    <div className='w-full md:w-64 shrink-0 space-y-8'>
      {/* Header */}
      <div className='flex items-center gap-2 mb-6'>
        <Filter className='h-5 w-5 text-gray-300' />
        <Skeleton className='h-6 w-32' />
      </div>

      {/* Button Placeholder */}
      <Skeleton className='w-full h-12 mb-6 rounded-md' />

      {/* Categories List */}
      <div className='space-y-6'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='space-y-3'>
            <div className='flex items-center justify-between'>
              <Skeleton className='h-4 w-3/4' />
            </div>
            <div className='h-px bg-border/50 w-full mt-4' />
          </div>
        ))}
      </div>

      {/* Download Catalog Placeholder */}
      <Skeleton className='w-full h-14 mt-8 rounded-md' />
    </div>
  )
}
