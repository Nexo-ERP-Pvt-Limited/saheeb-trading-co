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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className='min-h-screen font-sans bg-gray-50/50'>
      {/* Hero */}
      <section className='bg-slate-900 text-white py-16 md:py-24'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Contact Us</h1>
          <p className='text-lg text-slate-300 max-w-xl mx-auto'>
            Have questions about our products or services? We're here to help.
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className='py-16 md:py-24 container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Get in Touch
              </h2>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                Whether you're looking for a quote, have a question about
                detailed specifications, or want to discuss a custom OEM
                project, our team is ready to assist you.
              </p>
            </div>

            <div className='space-y-6'>
              {/* Address */}
              <div className='flex items-start gap-4'>
                <div className='bg-kerbl-green/10 p-3 rounded-lg shrink-0'>
                  <MapPin className='h-6 w-6 text-kerbl-green' />
                </div>
                <div>
                  <h3 className='font-bold text-gray-900 mb-1'>Our Location</h3>
                  <address className='not-italic text-sm text-gray-600 leading-relaxed'>
                    Chah Dhodia, Abbot Road,
                    <br />
                    GPO Box # 736,
                    <br />
                    Sialkot - Pakistan.
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='bg-kerbl-green/10 p-3 rounded-lg shrink-0'>
                  <Phone className='h-6 w-6 text-kerbl-green' />
                </div>
                <div>
                  <h3 className='font-bold text-gray-900 mb-1'>Phone</h3>
                  <div className='flex flex-col text-sm text-gray-600 gap-1'>
                    <a
                      href='tel:+92524587036'
                      className='hover:text-kerbl-green'
                    >
                      Tel: +92-52-4587036
                    </a>
                    <a
                      href='tel:+923333890000'
                      className='hover:text-kerbl-green'
                    >
                      Cell: +92-3333890000
                    </a>
                    <a
                      href='tel:+923216123007'
                      className='hover:text-kerbl-green'
                    >
                      Cell: +92-3216123007
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='bg-kerbl-green/10 p-3 rounded-lg shrink-0'>
                  <Mail className='h-6 w-6 text-kerbl-green' />
                </div>
                <div>
                  <h3 className='font-bold text-gray-900 mb-1'>Email</h3>
                  <a
                    href='mailto:info@saheebtrading.com'
                    className='text-sm text-gray-600 hover:text-kerbl-green'
                  >
                    info@saheebtrading.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className='flex items-start gap-4'>
                <div className='bg-kerbl-green/10 p-3 rounded-lg shrink-0'>
                  <Clock className='h-6 w-6 text-kerbl-green' />
                </div>
                <div>
                  <h3 className='font-bold text-gray-900 mb-1'>
                    Working Hours
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Mon - Sat: 9:00 AM - 6:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border/50'>
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>
              Send us a Message
            </h2>
            <p className='text-gray-500 text-sm mb-6'>
              Fill out the form below and we will get back to you shortly.
            </p>

            {submitted ? (
              <div className='bg-green-50 text-green-700 p-6 rounded-lg text-center'>
                <h3 className='font-bold text-lg mb-2'>Message Sent!</h3>
                <p>
                  Thank you for contacting us. We will respond to your inquiry
                  soon.
                </p>
                <Button
                  className='mt-4 bg-kerbl-green text-white hover:bg-kerbl-green-dark'
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Full Name *</Label>
                    <Input
                      id='name'
                      placeholder='John Doe'
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email Address *</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='john@example.com'
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    placeholder='Inquiry about...'
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message'>Message *</Label>
                  <Textarea
                    id='message'
                    placeholder='How can we help you?'
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full bg-kerbl-green hover:bg-kerbl-green-dark text-white'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className='bg-slate-100 h-96 w-full flex items-center justify-center text-slate-400'>
        {/* You can embed a real Google Map here later */}
        <div className='text-center'>
          <MapPin className='h-10 w-10 mx-auto mb-2 opacity-50' />
          <p>Map Integration Placeholder</p>
          <p className='text-xs'>Chah Dhodia, Abbot Road, Sialkot</p>
        </div>
      </section>
    </main>
  )
}
