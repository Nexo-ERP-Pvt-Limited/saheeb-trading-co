import Link from 'next/link'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

import Image from 'next/image'

export function Footer() {
  return (
    <footer className='bg-[#f8f9fa] pt-16 pb-12 border-t border-gray-200 mt-auto font-sans text-[#212529]'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Logo & Quick Links */}
          <div className='space-y-6'>
            <Link href='/' className='shrink-0 flex items-center mb-6'>
              <Image
                src='/saheebTradingCo.png'
                alt='Saheeb Trading Co Logo'
                width={160}
                height={60}
                className='h-10 w-auto object-contain'
              />
            </Link>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/#'
                  className='hover:text-primary transition-colors'
                >
                  Flip-catalogue
                </Link>
              </li>
              <li>
                <Link
                  href='/#'
                  className='hover:text-primary transition-colors'
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href='/#'
                  className='hover:text-primary transition-colors'
                >
                  Newsletter
                </Link>
              </li>
            </ul>
            <div className='flex space-x-4 pt-4'>
              <Link href='#' className='text-gray-400 hover:text-primary'>
                <Youtube className='h-5 w-5' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-primary'>
                <Facebook className='h-5 w-5' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-primary'>
                <Instagram className='h-5 w-5' />
              </Link>
              <Link href='#' className='text-gray-400 hover:text-primary'>
                <Linkedin className='h-5 w-5' />
              </Link>
            </div>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className='font-bold uppercase text-xs tracking-wider mb-6'>
              Information
            </h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Terms
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Cookie settings
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Legal notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact 1 */}
          <div>
            <h3 className='font-bold uppercase text-xs tracking-wider mb-6'>
              Contact Pakistan
            </h3>
            <address className='not-italic text-sm space-y-2'>
              <p className='font-bold'>Saheeb Trading Co.</p>
              <p>Chah Dhodia, Abbot Road,</p>
              <p>GPO Box # 736, SIALKOT - PAKISTAN.</p>
              <p className='pt-2'>
                Tel:{' '}
                <a href='tel:+92524587036' className='hover:text-primary'>
                  +92-52-4587036
                </a>
              </p>
              <p>
                Mail:{' '}
                <a
                  href='mailto:info@saheebtrading.com'
                  className='hover:text-primary text-primary'
                >
                  info@saheebtrading.com
                </a>
              </p>
            </address>
          </div>

          {/* Contact 2 */}
          {/* <div>
            <h3 className='font-bold uppercase text-xs tracking-wider mb-6'>
              Sales Support
            </h3>
            <address className='not-italic text-sm space-y-2'>
              <p>
                Phone:{' '}
                <a href='tel:+923333890000' className='hover:text-primary'>
                  +92-3333890000
                </a>
              </p>
              <p>
                Mobile:{' '}
                <a href='tel:+923216123007' className='hover:text-primary'>
                  +92-3216123007
                </a>
              </p>
            </address>
          </div> */}
        </div>

        <Separator className='mb-8' />

        <div className='flex flex-col md:flex-row justify-between items-center text-xs text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()} Saheeb Trading Co. All rights
            reserved.
          </p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Link
              href='https://nexo4erp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-kerbl-green transition-colors'
            >
              Made with ❤️ by Nexo 4 ERP
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
