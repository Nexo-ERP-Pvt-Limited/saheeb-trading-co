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
    <footer className='bg-gray-50 pt-16 pb-8 border-t border-gray-200 mt-auto font-sans'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Logo & Intro */}
          <div className='space-y-4'>
            <Link href='/' className='shrink-0 flex items-center'>
              <Image
                src='/saheebTradingCo.png'
                alt='Saheeb Trading Co Logo'
                width={140}
                height={60}
              />
            </Link>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Your trusted partner for high-quality surgical, veterinary, and
              dental instruments.
            </p>
            <div className='flex space-x-4 pt-2'>
              <Link
                href='https://www.facebook.com/asaheeb'
                className='text-gray-400 hover:text-kerbl-green transition-colors'
              >
                <Facebook className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.instagram.com/saheeb.co?igsh=dmtkamMxNXhleGZx&utm_source=qr'
                className='text-gray-400 hover:text-kerbl-green transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </Link>
              <Link
                href='https://pk.linkedin.com/in/saheeb-trading-co-7b0009a3'
                className='text-gray-400 hover:text-kerbl-green transition-colors'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-bold text-gray-900 mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <Link
                  href='/'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/products'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-kerbl-green transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='hover:text-kerbl-green transition-colors'
                >
                  OEM Services
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className='font-bold text-gray-900 mb-4'>Information</h3>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>
                <Link
                  href='#'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Guarantee
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Legal notice
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-kerbl-green transition-colors'
                >
                  Cookie settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-bold text-gray-900 mb-4'>Contact</h3>
            <address className='not-italic text-sm text-gray-600 space-y-3'>
              <div className='font-medium'>Saheeb Trading Co.</div>
              <div>
                Chah Dhodia, Abbot Road,
                <br />
                GPO Box # 736, SIALKOT - PAKISTAN.
              </div>
              <div className='flex items-start gap-2 mt-2'>
                <Phone className='h-4 w-4 text-kerbl-green mt-1 shrink-0' />
                <div className='flex flex-col'>
                  <a href='tel:+92524587036' className='hover:text-kerbl-green'>
                    Tel: +92-52-4587036
                  </a>
                  <a
                    href='tel:+923333890000'
                    className='hover:text-kerbl-green'
                  >
                    Phone: +92-3333890000
                  </a>
                  <a
                    href='tel:+923216123007'
                    className='hover:text-kerbl-green pl-11'
                  >
                    +92-3216123007
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4 text-kerbl-green' />
                <a
                  href='mailto:info@saheebtrading.com'
                  className='hover:text-kerbl-green'
                >
                  info@saheebtrading.com
                </a>
              </div>
            </address>
          </div>
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
