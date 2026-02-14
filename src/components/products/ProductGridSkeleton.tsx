import { Skeleton } from '@/components/ui/skeleton'

export function ProductGridSkeleton() {
  return (
    <div className='space-y-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className='bg-white border rounded-xl overflow-hidden shadow-sm'
          >
            {/* Image Skeleton */}
            <div className='relative aspect-square p-8'>
              <Skeleton className='h-full w-full rounded-lg' />
            </div>

            {/* Content Skeleton */}
            <div className='p-5 space-y-3'>
              <div className='flex justify-between items-start'>
                <Skeleton className='h-5 w-2/3' />
                <Skeleton className='h-4 w-12 rounded-full' />
              </div>

              <Skeleton className='h-3 w-1/2' />

              <div className='pt-2 flex justify-between items-center'>
                <Skeleton className='h-3 w-1/3' />
                <Skeleton className='h-8 w-8 rounded-full' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
