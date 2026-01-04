import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 mt-auto font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Intro */}
          <div className="space-y-4">
             <div className="text-2xl font-black tracking-tighter text-kerbl-green uppercase flex items-center">
                <span className="text-kerbl-yellow mr-1">Easy</span>
                Trading
             </div>
             <p className="text-sm text-gray-600 leading-relaxed">
               We are a family business led by the owner Albert Kerbl, who is well known for being a reliable partner.
             </p>
             <div className="flex space-x-4 pt-2">
                <Link href="#" className="text-gray-400 hover:text-kerbl-green transition-colors"><Youtube className="h-5 w-5" /></Link>
                <Link href="#" className="text-gray-400 hover:text-kerbl-green transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="text-gray-400 hover:text-kerbl-green transition-colors"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" className="text-gray-400 hover:text-kerbl-green transition-colors"><Linkedin className="h-5 w-5" /></Link>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Flip-catalogue</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Career</Link></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Guarantee</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Legal notice</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-kerbl-green transition-colors">Cookie settings</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
             <address className="not-italic text-sm text-gray-600 space-y-3">
                <div className="font-medium">Albert Kerbl GmbH</div>
                <div>Felizenzell 9<br/>84428 Buchbach, Germany</div>
                <div className="flex items-center gap-2 mt-2">
                    <Phone className="h-4 w-4 text-kerbl-green" />
                    <a href="tel:+4908086933100" className="hover:text-kerbl-green">+49 8086 933-100</a>
                </div>
                 <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-kerbl-green" />
                    <a href="mailto:info@kerbl.com" className="hover:text-kerbl-green">info@kerbl.com</a>
                </div>
             </address>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Albert Kerbl GmbH. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <span>Made with modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
