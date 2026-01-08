import { Category, Product } from './types'

export const categories: Category[] = [
  {
    id: 'human-healthcare',
    name: 'HUMAN HEALTHCARE',
    subcategories: [
      { id: 'human-surgical', name: 'Human Surgical' },
      { id: 'human-dental', name: 'Human Dental' },
      { id: 'diagnostic-tools', name: 'Diagnostic Tools' },
    ],
  },
  {
    id: 'veterinary-medicine',
    name: 'VETERINARY MEDICINE',
    subcategories: [
      { id: 'veterinary-surgery', name: 'Veterinary Surgery' },
      { id: 'hoof-care', name: 'Hoof Care' },
      { id: 'large-animal', name: 'Large Animal' },
      { id: 'small-animal', name: 'Small Animal' },
      { id: 'equine-care', name: 'Equine Care' },
    ],
  },
  {
    id: 'agriculture-farm',
    name: 'AGRICULTURE & FARM',
    subcategories: [
      { id: 'livestock-management', name: 'Livestock Management' },
      { id: 'farm-hardware', name: 'Farm Hardware' },
    ],
  },
]

export const products: Product[] = [
  {
    id: 'B-261',
    name: 'B-261 Stirrup',
    description: 'Stirrup With Rubber Pad. Enhanced grip pad.',
    category: 'VETERINARY MEDICINE',
    subCategory: 'Equine Care',
    image: '/images/products/stirrup.png', // Placeholder
  },
  {
    id: 'S-101',
    name: 'Surgical Scissors',
    description: 'High precision stainless steel surgical scissors.',
    category: 'HUMAN HEALTHCARE',
    subCategory: 'Human Surgical',
    image: '/images/products/scissors.png',
  },
  {
    id: 'D-202',
    name: 'Dental Mirror',
    description: 'Angled dental mirror with ergonomic handle.',
    category: 'HUMAN HEALTHCARE',
    subCategory: 'Human Dental',
    image: '/images/products/mirror.png',
  },
  {
    id: 'V-303',
    name: 'Hoof Trimmer',
    description: 'Heavy duty hoof trimmer for large animals.',
    category: 'VETERINARY MEDICINE',
    subCategory: 'Hoof Care',
    image: '/images/products/hoof-trimmer.png',
  },
  {
    id: 'A-404',
    name: 'Cattle Tag Applicator',
    description: 'Durable applicator for livestock ear tags.',
    category: 'AGRICULTURE & FARM',
    subCategory: 'Livestock Management',
    image: '/images/products/tag-applicator.png',
  },
  {
    id: 'B-262',
    name: 'B-262 Stirrup',
    description: 'Stirrup With Rubber Pad. Enhanced grip pad.',
    category: 'VETERINARY MEDICINE',
    subCategory: 'Equine Care',
    image: '/images/products/stirrup.png',
  },
  {
    id: 'S-102',
    name: 'Surgical Scissors Extended',
    description: 'High precision stainless steel surgical scissors.',
    category: 'HUMAN HEALTHCARE',
    subCategory: 'Human Surgical',
    image: '/images/products/scissors.png',
  },
  {
    id: 'D-203',
    name: 'Dental Mirror Pro',
    description: 'Angled dental mirror with ergonomic handle.',
    category: 'HUMAN HEALTHCARE',
    subCategory: 'Human Dental',
    image: '/images/products/mirror.png',
  },
]
