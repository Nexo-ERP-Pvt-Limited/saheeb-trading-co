import { Skeleton } from '@/components/ui/skeleton'

export function FeaturedProductSkeleton() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className='block'>
          {/* Image Skeleton */}
          <div className='relative aspect-square mb-3'>
            <Skeleton className='h-full w-full rounded-lg' />
          </div>

          {/* Info Skeleton */}
          <Skeleton className='h-4 w-3/4 mb-2' />
          <Skeleton className='h-3 w-1/2 mb-1' />
          <Skeleton className='h-3 w-1/3' />
        </div>
      ))}
    </div>
  )
}
