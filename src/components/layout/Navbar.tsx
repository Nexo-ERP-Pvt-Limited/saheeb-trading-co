'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
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
import { useProductStore } from '@/store/product-store'
import { useLanguageStore, type Locale } from '@/store/language-store'
import { useTranslation } from '@/translations'
import { ProductMegaMenu } from './ProductMegaMenu'
import { Category } from '@/components/products/types'

const languageOptions: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
]

export function Navbar() {
  const router = useRouter()
  const quoteItems = useQuoteStore((state) => state.items)
  const itemCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0)
  const { searchQuery, setSearchQuery, setSelectedCategoryId } =
    useProductStore()
  const { locale, setLocale } = useLanguageStore()
  const { t } = useTranslation()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProductsHovered, setIsProductsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/categories')
        if (!res.ok) return
        const json = await res.json()
        setCategories(json.data || [])
      } catch {
        // silently fail
      }
    }
    fetchCategories()
  }, [])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSelectedCategoryId(undefined)
      router.push('/products')
    }
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  const currentLangLabel =
    languageOptions.find((l) => l.code === locale)?.label ?? 'English'

  return (
    <header className='w-full bg-white font-sans sticky top-0 z-50 shadow-sm relative'>
      {/* Mobile Top Bar */}
      <div className='md:hidden flex justify-end items-center bg-gray-100 px-4 py-2 text-xs border-b border-gray-200 gap-4'>
        {/* Language Selector (Mobile) */}
        <div className='relative'>
          <div
            className='flex items-center gap-1 text-gray-600 cursor-pointer'
            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
          >
            <span>{currentLangLabel}</span>
            <span className='text-[10px]'>▼</span>
          </div>
          {isMobileLangOpen && (
            <div className='absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-sm z-50 min-w-[100px]'>
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  className={`block w-full text-left px-3 py-2 text-xs hover:bg-gray-100 transition-colors ${locale === lang.code ? 'text-primary font-bold' : 'text-gray-600'}`}
                  onClick={() => {
                    setLocale(lang.code)
                    setIsMobileLangOpen(false)
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Retailer Shop Link */}
        <Link
          href='/quote'
          className='flex items-center gap-2 text-kerbl-green font-bold'
        >
          <ShoppingCart className='h-3 w-3' />
          <span>{t('nav.retailerShop')}</span>
        </Link>
      </div>

      <div className='container mx-auto px-4 pt-4 md:pt-6 pb-2'>
        {/* Row 1: Logo & Utilities */}
        <div className='flex justify-between items-center mb-2 md:mb-4 relative'>
          {/* Mobile Menu Trigger (Left) */}
          <div className='md:hidden flex items-center pr-4  '>
            <Button
              variant='ghost'
              size='icon'
              className='-ml-2 hover:bg-transparent h-12 w-12'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className='h-12 w-12 text-black' />
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
            {/* Language Selector (Desktop) */}
            <div className='relative' ref={langRef}>
              <div
                className='bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer transition-colors border border-gray-200'
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span className='text-sm text-gray-700 font-medium'>
                  {currentLangLabel}
                </span>
                <div className='h-3 w-3 flex items-center justify-center text-gray-500 text-[10px]'>
                  ▼
                </div>
              </div>
              {isLangOpen && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-sm z-50 min-w-[120px]'>
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${locale === lang.code ? 'text-primary font-bold' : 'text-gray-700'}`}
                      onClick={() => {
                        setLocale(lang.code)
                        setIsLangOpen(false)
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* OEM Services */}
            <Link
              href='/services'
              className='text-kerbl-green font-bold text-sm hover:opacity-80 transition-opacity'
            >
              {t('nav.oemServices')}
            </Link>

            {/* Retailer Shop */}
            <Link
              href='/quote'
              className='flex items-center gap-2 text-kerbl-green font-bold text-sm hover:opacity-80 transition-opacity'
            >
              <ShoppingCart className='h-5 w-5' />
              <span>{t('nav.retailerShop')}</span>
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
              {t('nav.home')}
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className='flex items-center gap-1 text-gray-500 font-bold hover:text-primary text-[15px] cursor-pointer relative py-2'
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <Link href='/products'>{t('nav.products')}</Link>
              <span className='text-[10px]'>▼</span>

              {/* Invisible bridge to prevent closing when moving mouse to menu */}
              <div className='absolute top-full left-0 w-full h-4 bg-transparent' />
            </div>

            <Link
              href='/about'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              {t('nav.about')}
            </Link>
            <Link
              href='/services'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              {t('nav.service')}
            </Link>
            <Link
              href='/exhibitions'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              {t('nav.exhibitions')}
            </Link>
            <Link
              href='/contact'
              className='text-gray-500 font-bold hover:text-primary text-[15px]'
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Search Bar */}
          <div className='relative w-72 group'>
            <Input
              type='text'
              placeholder={t('nav.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className='w-full pr-12 h-10 border-0 border-b border-gray-300 focus:border-primary focus:ring-0 rounded-none px-0 text-gray-600 placeholder:text-gray-300 bg-transparent'
            />
            <Button
              size='icon'
              className='absolute right-0 bottom-1 h-8 w-8 rounded-[4px] bg-primary hover:bg-primary/90 text-white shadow-sm'
              onClick={handleSearch}
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
            {t('nav.home')}
          </Link>

          <div className='flex flex-col gap-2'>
            <div
              className='flex items-center gap-1 text-lg font-bold text-gray-600 hover:text-primary cursor-pointer'
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
            >
              <span>{t('nav.products')}</span>
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
              <div className='bg-gray-200 p-4 rounded-sm flex flex-col gap-3 shadow-inner'>
                {categories.map((cat) => (
                  <div key={cat.id}>
                    <span className='text-base font-bold text-gray-700 uppercase tracking-tight'>
                      {cat.name}
                    </span>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <div className='ml-3 mt-1 flex flex-col gap-1'>
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub.id}
                            className='text-left text-sm text-gray-500 hover:text-primary py-1'
                            onClick={() => {
                              setSearchQuery('')
                              setSelectedCategoryId(sub.id)
                              setIsMobileMenuOpen(false)
                              router.push('/products')
                            }}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href='/about'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.about')}
          </Link>
          <Link
            href='/services'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.service')}
          </Link>
          <Link
            href='/exhibitions'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.exhibitions')}
          </Link>
          <Link
            href='/contact'
            className='text-lg font-bold text-gray-600 hover:text-primary'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.contact')}
          </Link>

          <div className='mt-4 pb-8'>
            <h4 className='text-sm text-gray-400 mb-2'>{t('nav.search')}</h4>
            <div className='relative w-full group'>
              <Input
                type='text'
                placeholder={t('nav.searchMobilePlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                    setIsMobileMenuOpen(false)
                  }
                }}
                className='w-full pr-12 h-10 border-0 border-b border-gray-300 rounded-none px-0 text-gray-600 placeholder:text-gray-400 focus:border-primary focus:ring-0'
              />
              <Button
                size='icon'
                className='absolute right-0 bottom-1 h-8 w-8 rounded-[4px] bg-primary hover:bg-primary/90 text-white'
                onClick={() => {
                  handleSearch()
                  setIsMobileMenuOpen(false)
                }}
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
