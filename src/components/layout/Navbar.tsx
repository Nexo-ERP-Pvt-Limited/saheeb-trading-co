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

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full bg-white shadow-sm font-sans'>
      {/* Top Bar */}
      <div className='bg-gray-100 py-1 text-xs text-gray-600 hidden md:block border-b border-gray-200'>
        <div className='container mx-auto px-4 flex justify-between items-center h-8'>
          <div className='flex items-center space-x-4'>
            <Link href='#' className='hover:text-kerbl-green transition-colors'>
              Home
            </Link>
            <Link href='#' className='hover:text-kerbl-green transition-colors'>
              Products
            </Link>
            <Link href='#' className='hover:text-kerbl-green transition-colors'>
              About us
            </Link>
            <Link href='#' className='hover:text-kerbl-green transition-colors'>
              Service
            </Link>
            <Link href='#' className='hover:text-kerbl-green transition-colors'>
              Guide
            </Link>
            <Link href='#' className='hover:text-kerbl-green transition-colors'>
              Contact
            </Link>
          </div>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-1 hover:text-kerbl-green cursor-pointer'>
              <Globe className='h-3 w-3' />
              <span>English</span>
            </div>
            <div className='flex items-center space-x-1 hover:text-kerbl-green cursor-pointer'>
              <FileText className='h-3 w-3' />
              <span>Planning tools</span>
            </div>
            <div className='flex items-center space-x-1 hover:text-kerbl-green font-bold cursor-pointer text-kerbl-green'>
              <ShoppingCart className='h-3 w-3' />
              <span>Retailer Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className='container mx-auto px-4 py-4 md:py-6'>
        <div className='flex items-center justify-between gap-4'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0 flex items-center gap-2'>
            {/* Placeholder for Kerbl Logo */}
            <div className='text-3xl font-black tracking-tighter text-kerbl-green uppercase flex items-center'>
              <span className='text-kerbl-yellow mr-1'>Easy</span>
              Trading
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className='hidden md:flex flex-1 max-w-xl mx-auto relative group'>
            <div className='relative w-full'>
              <Input
                type='text'
                placeholder='Search...'
                className='w-full pr-12 border-gray-300 focus-visible:ring-kerbl-green focus-visible:border-kerbl-green rounded-sm transition-all shadow-sm'
              />
              <Button
                size='icon'
                className='absolute right-0 top-0 h-full w-12 rounded-l-none rounded-r-sm bg-kerbl-green hover:bg-kerbl-green-dark text-white transition-colors'
              >
                <Search className='h-5 w-5' />
                <span className='sr-only'>Search</span>
              </Button>
            </div>
          </div>

          {/* Actions - Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='sm'
              className='flex flex-col h-auto py-1 items-center gap-1 hover:text-kerbl-green hover:bg-transparent'
            >
              <User className='h-6 w-6' />
              <span className='text-[10px] font-medium'>Account</span>
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='flex flex-col h-auto py-1 items-center gap-1 hover:text-kerbl-green hover:bg-transparent relative'
            >
              <ShoppingCart className='h-6 w-6' />
              <span className='absolute top-0 right-1 bg-kerbl-yellow text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold'>
                0
              </span>
              <span className='text-[10px] font-medium'>Cart</span>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className='md:hidden flex items-center gap-2'>
            <Button variant='ghost' size='icon'>
              <Search className='h-6 w-6' />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4 mt-6'>
                  <Link
                    href='#'
                    className='text-lg font-semibold hover:text-kerbl-green'
                  >
                    Products
                  </Link>
                  <Link
                    href='#'
                    className='text-lg font-semibold hover:text-kerbl-green'
                  >
                    Agricultural Supplies
                  </Link>
                  <Link
                    href='#'
                    className='text-lg font-semibold hover:text-kerbl-green'
                  >
                    Horses
                  </Link>
                  <Link
                    href='#'
                    className='text-lg font-semibold hover:text-kerbl-green'
                  >
                    Pet
                  </Link>
                  <Separator />
                  <Link href='#' className='text-sm'>
                    About us
                  </Link>
                  <Link href='#' className='text-sm'>
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (visible only on small mobile if needed, usually just icon is enough but adding for completeness if space permits or hidden) */}
    </header>
  )
}
