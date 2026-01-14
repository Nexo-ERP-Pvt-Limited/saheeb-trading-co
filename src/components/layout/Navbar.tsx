'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Phone,
  Mail,
  Globe,
  HelpCircle,
  FileText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

import { useQuoteStore } from '@/store/quote-store'
import { ProductMegaMenu } from './ProductMegaMenu'
import { categories } from '@/components/products/data'

export function Navbar() {
  const quoteItems = useQuoteStore((state) => state.items)
  const itemCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProductsHovered, setIsProductsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  return (
    <header className='w-full bg-white font-sans sticky top-0 z-50 shadow-sm relative'>
      {/* Mobile Top Bar */}
      <div className='md:hidden flex justify-end items-center bg-gray-100 px-4 py-2 text-xs border-b border-gray-200 gap-4'>
        {/* Language Selector (Mock) */}
        <div className='flex items-center gap-1 text-gray-600'>
          <span>English</span>
          <span className='text-[10px]'>▼</span>
        </div>
        {/* Retailer Shop Link */}
        <Link
          href='/quote'
          className='flex items-center gap-2 text-kerbl-green font-bold'
        >
          <ShoppingCart className='h-3 w-3' />
          <span>Retailer Shop</span>
        </Link>
      </div>

      <div className='container mx-auto px-4 pt-4 md:pt-6 pb-2'>
        {/* Row 1: Logo & Utilities */}
        <div className='flex justify-between items-center mb-2 md:mb-4 relative'>
          {/* Mobile Menu Trigger (Left) */}
          <div className='md:hidden flex items-center pr-4'>
            <Button
              variant='ghost'
              size='icon'
              className='-ml-2 hover:bg-transparent'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className='h-10 w-10 text-gray-400' />
            </Button>
          </div>

          {/* Logo (Right on mobile, Left on desktop) */}
          <Link
            href='/'
            className='shrink-0 flex items-center md:mr-auto ml-auto md:ml-0'
          >
            <Image
              src='/saheebTradingCo.png'
              alt='Saheeb Trading Co Logo'
              width={180}
              height={60}
              className='h-10 md:h-14 w-auto object-contain'
            />
          </Link>

          {/* Desktop Utilities */}
          <div className='hidden md:flex items-center gap-8'>
            {/* Language Selector */}
            <div className='bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer transition-colors border border-gray-200'>
              <span className='text-sm text-gray-700 font-medium'>English</span>
              <div className='h-3 w-3 text-gray-500'>▼</div>
            </div>

            {/* OEM Services */}
            <Link
              href='/services'
              className='text-kerbl-green font-bold text-sm hover:opacity-80 transition-opacity'
            >
              OEM Services
            </Link>

            {/* Retailer Shop */}
            <Link
              href='/quote'
              className='flex items-center gap-2 text-kerbl-green font-bold text-sm hover:opacity-80 transition-opacity'
            >
              <ShoppingCart className='h-5 w-5' />
              <span>Retailer Shop</span>
              {itemCount > 0 && (
                <span className='bg-kerbl-yellow text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold ml-[-4px] mb-4'>
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Row 2: Navigation & Search (Hidden on Mobile) */}
        <div className='hidden md:flex justify-between items-end pb-2'>
          {/* Main Navigation */}
          <nav className='flex items-center gap-6'>
            <Link
              href='/'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className='flex items-center gap-1 text-gray-500 font-bold hover:text-primary text-[15px] cursor-pointer relative py-2'
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <Link href='/products'>Products</Link>
              <span className='text-[10px]'>▼</span>

              {/* Invisible bridge to prevent closing when moving mouse to menu */}
              <div className='absolute top-full left-0 w-full h-4 bg-transparent' />
            </div>

            <Link
              href='/about'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              About us
            </Link>
            <Link
              href='/services'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              Service
            </Link>
            <Link
              href='/guide'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              Guide
            </Link>
            <Link
              href='/contact'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className='relative w-72 group'>
            <Input
              type='text'
              placeholder='Search'
              className='w-full pr-12 h-10 border-0 border-b border-gray-300 focus:border-primary focus:ring-0 rounded-none px-0 text-gray-600 placeholder:text-gray-300 bg-transparent'
            />
            <Button
              size='icon'
              className='absolute right-0 bottom-1 h-8 w-8 rounded-[4px] bg-primary hover:bg-primary/90 text-white shadow-sm'
            >
              <Search className='h-4 w-4 stroke-[3]' />
            </Button>
          </div>
        </div>
      </div>

      {/* Optional Gradient Border Bottom */}
      <div className='h-1 w-full bg-gradient-to-r from-primary/80 to-kerbl-yellow/80 md:hidden' />

      {/* Mega Menu Overlay (Desktop) */}
      <div
        className='absolute top-full left-0 w-full z-40'
        onMouseEnter={() => setIsProductsHovered(true)}
        onMouseLeave={() => setIsProductsHovered(false)}
      >
        <ProductMegaMenu
          categories={categories}
          visible={isProductsHovered}
          onClose={() => setIsProductsHovered(false)}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-6 z-40 max-h-[80vh] overflow-y-auto'>
          <Link
            href='/'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div className='flex flex-col gap-2'>
            <div
              className='flex items-center gap-1 text-lg font-bold text-gray-600 hover:text-primary cursor-pointer'
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
            >
              <span>Products</span>
              <span
                className={`text-[10px] transform transition-transform ${
                  isMobileProductsOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </div>
            {/* Products Submenu */}
            {isMobileProductsOpen && (
              <div className='bg-gray-200 p-4 rounded-sm flex flex-col gap-2 shadow-inner'>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='text-base font-bold text-gray-600 hover:text-primary py-1'
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href='/about'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            href='/services'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href='/guide'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Guide
          </Link>
          <Link
            href='/contact'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className='mt-4 pb-8'>
            <h4 className='text-sm text-gray-400 mb-2'>Search</h4>
            <div className='relative w-full group'>
              <Input
                type='text'
                placeholder='Search...'
                className='w-full pr-12 h-10 border-0 border-b border-gray-300 rounded-none px-0 text-gray-600 placeholder:text-gray-400 focus:border-primary focus:ring-0'
              />
              <Button
                size='icon'
                className='absolute right-0 bottom-1 h-8 w-8 rounded-[4px] bg-primary hover:bg-primary/90 text-white'
              >
                <Search className='h-4 w-4 stroke-[3]' />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
