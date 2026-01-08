'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Product } from './types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))
  const increaseQuantity = () => setQuantity((prev) => prev + 1)

  return (
    <Card className='overflow-hidden border-border/40 hover:border-primary/20 transition-all hover:shadow-lg group bg-card'>
      <div className='relative p-6 bg-secondary/20 aspect-square flex items-center justify-center'>
        {/* Badges */}
        <Badge
          variant='secondary'
          className='absolute top-3 left-3 bg-secondary-foreground text-secondary font-mono text-xs'
        >
          {product.id}
        </Badge>
        {product.subCategory && (
          <Badge
            variant='outline'
            className='absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-[10px] uppercase tracking-wider'
          >
            {product.subCategory}
          </Badge>
        )}

        {/* Image Placeholder if no real image */}
        <div className='relative w-full h-full p-4 transition-transform duration-300 group-hover:scale-105'>
          {/* Using a placeholder if image fails to load or path is dummy */}
          {product.image ? (
            <div className='w-full h-full relative'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain'
                // Fallback to text if image is missing in dev
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.classList.add(
                    'flex',
                    'items-center',
                    'justify-center',
                    'bg-muted'
                  )
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-4xl font-bold text-muted-foreground/20">${product.name.slice(
                    0,
                    1
                  )}</span>`
                }}
              />
            </div>
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-muted rounded-md'>
              <span className='text-4xl font-bold text-muted-foreground/20'>
                {product.name.slice(0, 1)}
              </span>
            </div>
          )}
        </div>
      </div>

      <CardContent className='p-5'>
        <h3 className='text-2xl font-bold text-foreground mb-2 group-hover:text-kerbl-green transition-colors line-clamp-1'>
          {product.name}
        </h3>
        <p className='text-sm text-muted-foreground mb-4 line-clamp-2 md:h-10'>
          {product.description}
        </p>
      </CardContent>

      <CardFooter className='p-5 pt-0 flex flex-col gap-3'>
        <div className='flex w-full items-center gap-2'>
          <div className='flex px-1 items-center border rounded-md'>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 rounded-none hover:text-kerbl-green'
              onClick={decreaseQuantity}
            >
              <Minus className='h-3 w-3' />
            </Button>
            <span className='w-8 text-center text-sm font-medium'>
              {quantity}
            </span>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 rounded-none hover:text-kerbl-green'
              onClick={increaseQuantity}
            >
              <Plus className='h-3 w-3' />
            </Button>
          </div>

          <Button
            className='flex-1 gap-2 bg-kerbl-green hover:bg-kerbl-green-dark text-white border-none'
            variant='default'
          >
            <ShoppingCart className='h-4 w-4' />
            Add to Quote
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
