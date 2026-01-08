import { ProductsClient } from './ProductsClient'
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
        <ProductsClient categories={categories} products={products} />
      </div>
    </main>
  )
}
