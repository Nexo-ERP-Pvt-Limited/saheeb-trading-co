'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className='min-h-screen font-sans bg-white'>
      {/* Header Section */}
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            Contact <span className='text-primary'>Saheeb</span> Trading Co.
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
        </div>
      </div>

      <section className='py-16 container mx-auto px-4'>
        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Contact Information Blocks */}
          <div className='lg:col-span-1 space-y-12'>
            <div className='space-y-6'>
              <h2 className='text-xs font-black uppercase tracking-[0.2em] text-gray-400'>
                Headquarters Pakistan
              </h2>
              <address className='not-italic space-y-4 text-sm text-gray-800'>
                <p className='font-bold text-lg'>Saheeb Trading Co.</p>
                <p>
                  Chah Dhodia, Abbot Road,
                  <br />
                  GPO Box # 736, SIALKOT - PAKISTAN.
                </p>
                <div className='space-y-1 pt-2'>
                  <p>
                    Tel:{' '}
                    <a
                      href='tel:+92524587036'
                      className='text-primary font-bold hover:underline'
                    >
                      +92-52-4587036
                    </a>
                  </p>
                  <p>
                    Mail:{' '}
                    <a
                      href='mailto:Saheebco@gmail.com'
                      className='text-primary font-bold hover:underline'
                    >
                      Saheebco@gmail.com
                    </a>
                  </p>
                </div>
              </address>
              <div className='flex gap-4 pt-2'>
                <div className='bg-primary/5 p-3 shrink-0'>
                  <Clock className='h-5 w-5 text-primary' />
                </div>
                <div className='text-xs text-gray-600'>
                  <p className='font-bold uppercase tracking-wider mb-1'>
                    Working Hours
                  </p>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Warehouse & Registrations */}
            <div className='space-y-6 pt-12 border-t border-gray-100'>
              <h2 className='text-xs font-black uppercase tracking-[0.2em] text-gray-400'>
                Warehouse & Registrations
              </h2>
              <div className='text-sm text-gray-800 space-y-4'>
                <div className='flex gap-4'>
                  <div className='bg-primary/5 p-3 shrink-0'>
                    <MapPin className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <p className='font-bold uppercase tracking-wider text-[10px] text-gray-500 mb-1'>
                      Address Warehouse
                    </p>
                    <p className='font-medium'>
                      9 km Cahbbil Pur Daska Road Sialkot-Pakistan
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-1 gap-2 pt-2 text-xs'>
                  <p>
                    <span className='font-bold uppercase text-gray-500 mr-2'>
                      NTN No:
                    </span>
                    <span className='font-medium'>0680922-7 / </span>
                    <a
                      href='https://iris.fbr.gov.pk/#verifications'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary font-bold hover:underline inline-flex items-center gap-1'
                    >
                      Visit FBR
                    </a>
                  </p>
                  <p>
                    <span className='font-bold uppercase text-gray-500 mr-2'>
                      EPB Export Reg No:
                    </span>
                    <span className='font-medium'>W - 019737</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className='space-y-6 pt-12 border-t border-gray-100'>
              <h2 className='text-xs font-black uppercase tracking-[0.2em] text-gray-400'>
                Memberships
              </h2>
              <div className='space-y-5 text-sm text-gray-800'>
                <div>
                  <p className='font-black uppercase text-[10px] text-gray-500 mb-1 tracking-wider'>
                    Member of Surgical Association
                  </p>
                  <p className='font-medium'>
                    Member Id S023 /{' '}
                    <a
                      href='http://www.simap.org.pk/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary font-bold hover:underline inline-flex items-center gap-1'
                    >
                      Visit SIMAP
                    </a>
                  </p>
                </div>
                <div>
                  <p className='font-black uppercase text-[10px] text-gray-500 mb-1 tracking-wider'>
                    Member of Sialkot Chamber of Commerce
                  </p>
                  <p className='font-medium'>
                    Member ID :A-03066 /{' '}
                    <a
                      href='https://www.scci.com.pk'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary font-bold hover:underline'
                    >
                      Visit SCCI
                    </a>
                  </p>
                </div>
                <div>
                  <p className='font-black uppercase text-[10px] text-gray-500 mb-1 tracking-wider'>
                    Director for SIAL International
                  </p>
                  <p className='font-medium'>
                    Member ID 339 /{' '}
                    <a
                      href='https://www.sial.com.pk'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary font-bold hover:underline'
                    >
                      Visit SIAL
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2 bg-gray-50 p-8 md:p-12'>
            <h2 className='text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight'>
              Send us a <span className='text-primary'>Message</span>
            </h2>

            {submitted ? (
              <div className='bg-white shadow-sm border border-primary/20 p-8 rounded-none text-center'>
                <h3 className='font-black text-xl mb-4 text-primary uppercase'>
                  Message Sent Successfully!
                </h3>
                <p className='text-gray-600 mb-6'>
                  Thank you for your inquiry. Our team will get back to you
                  shortly.
                </p>
                <Button
                  className='bg-primary text-white hover:bg-primary/90 font-bold px-8 py-6 rounded-none uppercase'
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
              >
                <div className='space-y-2'>
                  <Label
                    htmlFor='name'
                    className='font-bold uppercase text-[10px] tracking-widest text-gray-500'
                  >
                    Full Name *
                  </Label>
                  <Input
                    id='name'
                    className='rounded-none border-gray-200 bg-white h-12 focus:border-primary focus:ring-0'
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className='space-y-2'>
                  <Label
                    htmlFor='email'
                    className='font-bold uppercase text-[10px] tracking-widest text-gray-500'
                  >
                    Email Address *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    className='rounded-none border-gray-200 bg-white h-12 focus:border-primary focus:ring-0'
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className='md:col-span-2 space-y-2'>
                  <Label
                    htmlFor='subject'
                    className='font-bold uppercase text-[10px] tracking-widest text-gray-500'
                  >
                    Subject
                  </Label>
                  <Input
                    id='subject'
                    className='rounded-none border-gray-200 bg-white h-12 focus:border-primary focus:ring-0'
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div className='md:col-span-2 space-y-2'>
                  <Label
                    htmlFor='message'
                    className='font-bold uppercase text-[10px] tracking-widest text-gray-500'
                  >
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    className='rounded-none border-gray-200 bg-white focus:border-primary focus:ring-0 p-4'
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className='md:col-span-2 pt-4'>
                  <Button
                    type='submit'
                    className='w-full md:w-auto bg-primary hover:bg-primary/95 text-white font-black px-12 py-7 rounded-none uppercase tracking-widest transition-all'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message!'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
