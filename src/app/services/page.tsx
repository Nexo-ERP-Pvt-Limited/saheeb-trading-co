import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  PenTool,
  Printer,
  Package,
  Truck,
  MessageSquare,
  ClipboardCheck,
  Factory,
  Globe,
} from 'lucide-react'

export default function OEMServicesPage() {
  const services = [
    {
      title: 'Custom Design',
      description:
        'We can create entirely new products based on your technical drawings or samples using our in-house die making capabilities.',
      icon: <PenTool className='h-10 w-10 text-primary' />,
    },
    {
      title: 'Imprinting & Marking',
      description:
        'High-precision laser etching of your logo, brand name, and SKU numbers directly onto the steel.',
      icon: <Printer className='h-10 w-10 text-primary' />,
    },
    {
      title: 'Custom Packaging',
      description:
        'Blister packs, pouches, leather kits, or boxes designed with your branding and colors.',
      icon: <Package className='h-10 w-10 text-primary' />,
    },
    {
      title: 'Global Logistics',
      description:
        'From palletized shipments to direct warehouse deliveries, we ensure smooth and reliable fulfillment worldwide.',
      icon: <Truck className='h-10 w-10 text-primary' />,
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Discuss requirements',
      icon: <MessageSquare className='h-6 w-6' />,
    },
    {
      number: '2',
      title: 'Sampling',
      description: 'Approve prototype',
      icon: <ClipboardCheck className='h-6 w-6' />,
    },
    {
      number: '3',
      title: 'Production',
      description: 'Manufacturing',
      icon: <Factory className='h-6 w-6' />,
    },
    {
      number: '4',
      title: 'Delivery',
      description: 'Global shipping',
      icon: <Globe className='h-6 w-6' />,
    },
  ]

  return (
    <main className='min-h-screen font-sans bg-white'>
      {/* Header Section */}
      <div className='bg-gray-50 py-16 border-b border-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight'>
            Our <span className='text-primary'>Services</span> & Solutions
          </h1>
          <div className='w-20 h-1 bg-primary mt-4' />
        </div>
      </div>

      <section className='py-20'>
        <div className='container mx-auto px-4 max-w-5xl'>
          <p className='text-xl text-gray-600 leading-relaxed mb-12 text-center'>
            We provide complete OEM/ODM support, offering imprinting and
            specialized branding solutions for customers seeking to enhance
            their market presence.
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
              Manufacturing <span className='text-primary'>Process</span>
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
          Ready to start your project?
        </h2>
        <Button
          size='lg'
          className='bg-primary hover:bg-primary/95 text-white font-black px-12 py-8 text-lg rounded-none uppercase tracking-widest'
        >
          Contact Our Team
        </Button>
      </section>
    </main>
  )
}
