import { create } from 'zustand'

interface ProductStore {
  selectedCategoryId: string | number | undefined
  setSelectedCategoryId: (id: string | number | undefined) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedCategoryId: undefined,
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),
}))
