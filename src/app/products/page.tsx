import { ProductSidebar } from '@/components/products/ProductSidebar'
import { ProductGrid } from '@/components/products/ProductGrid'
import { categories, products } from '@/components/products/data'

export const metadata = {
  title: 'All Products | Saheeb Trading Co.',
  description:
    'Browse our extensive catalog of high-quality surgical, veterinary, and dental instruments.',
}

export default function ProductsPage() {
  return (
    <main className='min-h-screen pt-20 pb-20 bg-background'>
      <div className='container mx-auto px-4 md:px-6'>
        {/* Breadcrumb or Title area could go here */}

        <div className='flex flex-col md:flex-row gap-12 pt-8'>
          {/* Sidebar - Hidden on mobile by default or moved to a sheet?
                For now, sticking to the requested layout, stacking on mobile.
                Ideally, on mobile this should be a collapsible filter or sheet.
            */}
          <aside className='hidden md:block'>
            <ProductSidebar categories={categories} />
          </aside>

          {/* Mobile Filter Trigger (Mock) */}
          <div className='md:hidden mb-4'>
            {/* This would be a sheet trigger in a real full responsive implementation */}
            <ProductSidebar categories={categories} className='w-full' />
          </div>

          <div className='flex-1'>
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </main>
  )
}
