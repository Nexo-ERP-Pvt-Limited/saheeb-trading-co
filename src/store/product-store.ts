import { create } from 'zustand'

interface ProductStore {
  selectedCategoryId: string | undefined
  setSelectedCategoryId: (id: string | undefined) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  selectedCategoryId: undefined,
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),
}))
