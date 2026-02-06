'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Product } from './types'

import { useQuoteStore } from '@/store/quote-store'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const addItem = useQuoteStore((state) => state.addItem)

  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))
  const increaseQuantity = () => setQuantity((prev) => prev + 1)

  const handleAddToQuote = () => {
    addItem(product, quantity)
    // Optional: Show feedback
    // alert('Added to quote!')
  }

  return (
    <Card className='overflow-hidden border-gray-200 hover:border-primary transition-all rounded-none bg-white flex flex-col h-full group'>
      <div className='relative p-4 bg-white aspect-square flex items-center justify-center border-b border-gray-50'>
        {/* Product ID - Clean Style */}
        <div className='absolute top-3 left-3 bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider z-10'>
          SKU {product.sku}
        </div>

        {/* Image */}
        <div className='relative w-full h-full p-2 transition-transform duration-500 group-hover:scale-105'>
          {product.image ? (
            <div className='w-full h-full relative'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                className='object-contain'
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.classList.add(
                    'flex',
                    'items-center',
                    'justify-center',
                    'bg-gray-50',
                  )
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl font-bold text-gray-200">${product.name.slice(
                    0,
                    1,
                  )}</span>`
                }}
              />
            </div>
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-gray-50'>
              <span className='text-3xl font-bold text-gray-200'>
                {product.name.slice(0, 1)}
              </span>
            </div>
          )}
        </div>
      </div>

      <CardContent className='p-4 flex-grow border-b border-gray-50'>
        <h3 className='text-lg font-bold text-gray-900 mb-2 transition-colors line-clamp-2 leading-snug'>
          {product.name}
        </h3>
        <p className='text-xs text-gray-500 line-clamp-2 min-h-[32px]'>
          {product.description}
        </p>
      </CardContent>

      <CardFooter className='p-4 pt-4 flex flex-col gap-3 mt-auto'>
        <div className='flex w-full items-center gap-2'>
          <div className='flex items-center border border-gray-200'>
            <Button
              variant='ghost'
              size='icon'
              className='h-9 w-9 rounded-none hover:bg-gray-50'
              onClick={decreaseQuantity}
            >
              <Minus className='h-3 w-3' />
            </Button>
            <span className='w-8 text-center text-sm font-bold'>
              {quantity}
            </span>
            <Button
              variant='ghost'
              size='icon'
              className='h-9 w-9 rounded-none hover:bg-gray-50 border-l border-gray-200'
              onClick={increaseQuantity}
            >
              <Plus className='h-3 w-3' />
            </Button>
          </div>

          <Button
            className='flex-1 gap-2 bg-primary hover:bg-primary/95 text-white border-none rounded-none h-9 font-bold'
            variant='default'
            onClick={handleAddToQuote}
          >
            <ShoppingCart className='h-4 w-4' />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
