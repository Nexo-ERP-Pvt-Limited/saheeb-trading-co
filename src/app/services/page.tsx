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
        'We can create entirely new molds based on your technical drawings or samples using our in-house die making capabilities.',
      icon: <PenTool className='h-10 w-10 text-kerbl-green' />,
    },
    {
      title: 'Imprinting & Marking',
      description:
        'High-precision laser etching of your logo, brand name, and SKU numbers directly onto the steel.',
      icon: <Printer className='h-10 w-10 text-kerbl-green' />,
    },
    {
      title: 'Custom Packaging',
      description:
        'Blister packs, pouches, leather kits, or boxes designed with your branding and colors.',
      icon: <Package className='h-10 w-10 text-kerbl-green' />,
    },
    {
      title: 'Global Logistics',
      description:
        'From palletized shipments to direct warehouse deliveries, we ensure smooth and reliable fulfillment worldwide.',
      icon: <Truck className='h-10 w-10 text-kerbl-green' />,
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
    <main className='min-h-screen font-sans'>
      {/* Hero Section */}
      <section className='bg-slate-900 text-white py-24 md:py-32'>
        <div className='container mx-auto px-4 text-center max-w-4xl'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Customization for Brand Growth
          </h1>
          <p className='text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10'>
            We provide complete OEM/ODM support, offering imprinting and
            specialized branding solutions for customers seeking to enhance
            their market presence.
          </p>
          <Button
            size='lg'
            className='bg-kerbl-green hover:bg-kerbl-green-dark text-white font-bold px-8 py-6 text-lg'
          >
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Private Label Services
            </h2>
            <div className='h-1 w-20 bg-kerbl-green mx-auto rounded-full'></div>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='border-none shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <CardContent className='p-8 flex flex-col items-start h-full'>
                  <div className='bg-kerbl-green/10 p-4 rounded-xl mb-6'>
                    {service.icon}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-slate-600 leading-relaxed text-sm'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <div className='h-1 w-20 bg-kerbl-green mx-auto rounded-full'></div>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto relative gap-8 md:gap-4'>
            {/* Connecting Line (Desktop) */}
            <div className='hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gray-200 z-0 mx-10'></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className='relative z-10 flex flex-col items-center text-center group w-full md:w-auto'
              >
                <div className='w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:bg-kerbl-green transition-colors duration-300 shadow-xl border-4 border-white'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-1'>
                  {step.title}
                </h3>
                <p className='text-sm text-gray-500 uppercase tracking-wide'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
