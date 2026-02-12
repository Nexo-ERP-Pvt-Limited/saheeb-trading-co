import { create } from 'zustand'

interface ProductStore {
  selectedCategoryId: string | number | undefined
  setSelectedCategoryId: (id: string | number | undefined) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedCategoryId: undefined,
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}))
