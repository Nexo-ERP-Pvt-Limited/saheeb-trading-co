import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/components/products/types'

export interface QuoteItem {
  product: Product
  quantity: number
}

interface QuoteStore {
  items: QuoteItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearQuote: () => void
}

export const useQuoteStore = create<QuoteStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id,
          )
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            }
          }
          return { items: [...state.items, { product, quantity }] }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
        })),
      clearQuote: () => set({ items: [] }),
    }),
    {
      name: 'quote-storage',
    },
  ),
)
