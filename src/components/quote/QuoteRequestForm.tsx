'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useQuoteStore } from '@/store/quote-store'

export function QuoteRequestForm() {
  const { items, clearQuote } = useQuoteStore()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    address: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate email sending
    console.log('Sending quote request...', { items, formData })

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    clearQuote()
  }

  if (submitted) {
    return (
      <div className='text-center py-12'>
        <h2 className='text-2xl font-bold mb-4'>Request Sent!</h2>
        <p className='text-muted-foreground'>
          Thank you for your quote request. We will review it and get back to
          you shortly at {formData.email}.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className='mt-6 bg-kerbl-green text-white'
        >
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div className='bg-muted/30 p-6 md:p-8 rounded-xl border border-border/50'>
      <h2 className='text-2xl font-bold mb-6'>Request a Quote</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Full Name *</Label>
            <Input
              id='name'
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email *</Label>
            <Input
              id='email'
              type='email'
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='phone'>Phone *</Label>
            <Input
              id='phone'
              type='tel'
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='company'>Company</Label>
            <Input
              id='company'
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='address'>Address *</Label>
          <Input
            id='address'
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='message'>Message (Optional)</Label>
          <Textarea
            id='message'
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <Button
          type='submit'
          size='lg'
          className='w-full bg-kerbl-green hover:bg-kerbl-green-dark text-white'
        >
          Submit Request
        </Button>
      </form>
    </div>
  )
}
