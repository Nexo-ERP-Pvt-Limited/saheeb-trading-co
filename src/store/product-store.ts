import { create } from 'zustand'

interface ProductStore {
  selectedCategoryId: number | undefined
  setSelectedCategoryId: (id: number | undefined) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedCategoryId: undefined,
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),
}))
