'use client'

import { useQuoteStore } from '@/store/quote-store'
import { QuoteRequestForm } from '@/components/quote/QuoteRequestForm'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

export default function QuotePage() {
  const { items, removeItem, updateQuantity } = useQuoteStore()

  return (
    <main className='min-h-screen pt-24 pb-24 container mx-auto px-4 md:px-6'>
      <h1 className='text-3xl font-bold mb-12'>Your Quote Request</h1>

      {items.length === 0 ? (
        <div className='text-center py-24 bg-muted/20 rounded-xl'>
          <div className='text-6xl mb-4'>🛒</div>
          <h2 className='text-2xl font-semibold mb-4'>
            Your quote list is empty
          </h2>
          <p className='text-muted-foreground mb-8'>
            Browse our products and add items to your quote request.
          </p>
          <Link href='/products'>
            <Button className='bg-kerbl-green hover:bg-kerbl-green-dark text-white'>
              Browse Products
            </Button>
          </Link>
        </div>
      ) : (
        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Items List */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-card border rounded-xl overflow-hidden'>
              <div className='p-6 space-y-6'>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className='flex gap-4 items-start sm:items-center py-4 border-b last:border-0 border-border/50'
                  >
                    <div className='relative h-20 w-20 bg-muted rounded-md overflow-hidden shrink-0'>
                      {item.product.image ? (
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className='object-contain p-2'
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.parentElement!.classList.add(
                              'flex',
                              'items-center',
                              'justify-center'
                            )
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-muted-foreground/30">${item.product.name.slice(
                              0,
                              1
                            )}</span>`
                          }}
                        />
                      ) : (
                        <div className='flex items-center justify-center h-full'>
                          <span className='text-xl font-bold text-muted-foreground/30'>
                            {item.product.name.slice(0, 1)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='font-semibold text-lg truncate pr-2'>
                        {item.product.name}
                      </h3>
                      <p className='text-sm text-muted-foreground mb-1'>
                        {item.product.id}
                      </p>
                      <p className='text-xs text-muted-foreground uppercase'>
                        {item.product.category}
                      </p>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                      <div className='flex items-center border rounded-md'>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 rounded-none'
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <Minus className='h-3 w-3' />
                        </Button>
                        <span className='w-8 text-center text-sm font-medium'>
                          {item.quantity}
                        </span>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 rounded-none'
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          <Plus className='h-3 w-3' />
                        </Button>
                      </div>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='text-destructive hover:text-destructive hover:bg-destructive/10'
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className='h-5 w-5' />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href='/products'>
              <Button
                variant='outline'
                className='w-full mt-4 border-kerbl-green text-kerbl-green hover:bg-kerbl-green hover:text-white'
              >
                <Plus className='h-4 w-4 mr-2' />
                Add more products
              </Button>
            </Link>
          </div>

          {/* Form */}
          <div className='lg:col-span-1'>
            <div className='sticky top-24'>
              <QuoteRequestForm />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
