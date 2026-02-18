'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  PenTool,
  Printer,
  Package,
  Truck,
  MessageSquare,
  ClipboardCheck,
  Factory,
  Globe,
  Send,
} from 'lucide-react'
import { useTranslation } from '@/translations'

export default function OEMServicesPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const formRef = useRef<HTMLDivElement>(null)
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    address: '',
  })

  const handleContactClick = () => {
    setShowForm(true)
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          products: [{ name: 'OEM Services Inquiry', sku: 'OEM', quantity: 1 }],
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send request')
      }

      setSubmitted(true)
      setTimeout(() => router.push('/'), 3000)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  const services = [
    {
      title: t('services.customDesign'),
      description: t('services.customDesignDesc'),
      icon: <PenTool className='h-10 w-10 text-primary' />,
    },
    {
      title: t('services.imprinting'),
      description: t('services.imprintingDesc'),
      icon: <Printer className='h-10 w-10 text-primary' />,
    },
    {
      title: t('services.packaging'),
      description: t('services.packagingDesc'),
      icon: <Package className='h-10 w-10 text-primary' />,
    },
    {
      title: t('services.logistics'),
      description: t('services.logisticsDesc'),
      icon: <Truck className='h-10 w-10 text-primary' />,
    },
  ]

  const steps = [
    {
      number: '1',
      title: t('services.step1'),
      description: t('services.step1Desc'),
      icon: <MessageSquare className='h-6 w-6' />,
    },
    {
      number: '2',
      title: t('services.step2'),
      description: t('services.step2Desc'),
      icon: <ClipboardCheck className='h-6 w-6' />,
    },
    {
      number: '3',
      title: t('services.step3'),
      description: t('services.step3Desc'),
      icon: <Factory className='h-6 w-6' />,
    },
    {
      number: '4',
      title: t('services.step4'),
      description: t('services.step4Desc'),
      icon: <Globe className='h-6 w-6' />,
    },
  ]

  return (
    <main className='min-h-screen font-sans bg-white'>
      {/* Header Section */}
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            {t('services.title1')}{' '}
            <span className='text-primary'>{t('services.title2')}</span>{' '}
            {t('services.title3')}
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
        </div>
      </div>

      <section className='py-20'>
        <div className='container mx-auto px-4 max-w-5xl'>
          <p className='text-xl text-gray-600 leading-relaxed mb-12 text-center'>
            {t('services.intro')}
          </p>

          <div className='grid md:grid-cols-2 gap-12'>
            {services.map((service, index) => (
              <div
                key={index}
                className='flex gap-6 p-8 border border-gray-100 hover:border-primary/20 transition-all bg-white shadow-sm'
              >
                <div className='bg-primary/5 p-4 rounded-none h-fit'>
                  {service.icon}
                </div>
                <div>
                  <h3 className='text-xl font-black text-gray-900 mb-3 uppercase tracking-tight'>
                    {service.title}
                  </h3>
                  <p className='text-gray-500 leading-relaxed text-sm'>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-gray-50 border-t border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight'>
              {t('services.processTitle1')}{' '}
              <span className='text-primary'>
                {t('services.processTitle2')}
              </span>
            </h2>
            <div className='h-1 w-20 bg-primary mx-auto'></div>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-12 md:gap-4'>
            {steps.map((step, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center group w-full md:w-1/4'
              >
                <div className='w-16 h-16 rounded-none bg-primary flex items-center justify-center text-white font-black text-2xl mb-6 shadow-sm'>
                  {step.number}
                </div>
                <h3 className='text-lg font-black text-gray-900 mb-2 uppercase tracking-tight'>
                  {step.title}
                </h3>
                <p className='text-xs text-gray-500 uppercase tracking-widest font-bold'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 text-center container mx-auto px-4'>
        <h2 className='text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight'>
          {t('services.readyToStart')}
        </h2>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/95 text-white font-black px-12 py-8 text-lg rounded-none uppercase tracking-widest'
          onClick={handleContactClick}
        >
          {t('services.contactTeam')}
        </Button>
      </section>

      {/* Contact Form Section */}
      {showForm && (
        <section ref={formRef} className='pb-20'>
          <div className='container mx-auto px-4 max-w-2xl'>
            <div className='bg-gray-50 border border-gray-200 p-8 md:p-10'>
              {submitted ? (
                <div className='text-center py-12'>
                  <div className='text-5xl mb-4'>✅</div>
                  <h2 className='text-2xl font-bold mb-4'>
                    {t('services.requestSent')}
                  </h2>
                  <p className='text-muted-foreground'>
                    {t('services.requestSentDesc')} {formData.email}.
                  </p>
                  <p className='text-sm text-muted-foreground mt-2'>
                    {t('services.redirecting')}
                  </p>
                  <Button
                    onClick={() => router.push('/')}
                    className='mt-6 bg-primary text-white'
                  >
                    {t('services.goHome')}
                  </Button>
                </div>
              ) : (
                <>
                  <div className='mb-8'>
                    <h2 className='text-2xl font-black text-gray-900 uppercase tracking-tight'>
                      {t('services.getInTouch1')}{' '}
                      <span className='text-primary'>
                        {t('services.getInTouch2')}
                      </span>
                    </h2>
                    <div className='w-12 h-1 bg-primary mt-3' />
                    <p className='text-gray-500 mt-4 text-sm'>
                      {t('services.formDescription')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className='space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='service-name'>
                          {t('services.fullName')}
                        </Label>
                        <Input
                          id='service-name'
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='service-email'>
                          {t('services.email')}
                        </Label>
                        <Input
                          id='service-email'
                          type='email'
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='service-phone'>
                          {t('services.phone')}
                        </Label>
                        <Input
                          id='service-phone'
                          type='tel'
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='service-company'>
                          {t('services.company')}
                        </Label>
                        <Input
                          id='service-company'
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='service-address'>
                        {t('services.address')}
                      </Label>
                      <Input
                        id='service-address'
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='service-message'>
                        {t('services.projectMessage')}
                      </Label>
                      <Textarea
                        id='service-message'
                        rows={4}
                        placeholder={t('services.projectPlaceholder')}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    {error && (
                      <div className='bg-destructive/10 text-destructive text-sm p-3 rounded-md'>
                        {error}
                      </div>
                    )}

                    <Button
                      type='submit'
                      size='lg'
                      disabled={isLoading}
                      className='w-full bg-primary hover:bg-primary/95 text-white font-bold disabled:opacity-60'
                    >
                      <Send className='h-4 w-4 mr-2' />
                      {isLoading
                        ? t('services.submitting')
                        : t('services.submitRequest')}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
