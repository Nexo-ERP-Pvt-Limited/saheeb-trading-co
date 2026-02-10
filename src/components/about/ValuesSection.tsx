import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/motion-wrapper'
import { Heart, Scale, Cog, Truck, ShieldCheck, Handshake } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description:
      'We aim to consistently deliver instruments that exceed expectations in performance and reliability.',
  },
  {
    icon: Scale,
    title: 'Quality at Fair Pricing',
    description:
      'Our goal is to provide top-tier instruments at competitive and sustainable prices.',
  },
  {
    icon: Cog,
    title: 'Customization',
    description:
      'We offer imprinting and specialized branding solutions for customers seeking to enhance their market presence.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    description:
      'From palletized shipments to direct warehouse deliveries, we ensure smooth and reliable fulfillment worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistent Quality',
    description:
      'Every product is made using modern machinery and refined manufacturing processes.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Collaboration',
    description:
      'Building relationships that grow stronger with time—built on mutual success and shared purpose.',
  },
]

export function ValuesSection() {
  return (
    <section className='py-10 px-4 md:px-8 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {values.map((value, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Card className='h-full border-none shadow-sm hover:shadow-md transition-shadow bg-muted/20'>
              <CardHeader className='pb-2'>
                <div className='mb-4 w-10 h-10 rounded-full bg-kerbl-green/10 flex items-center justify-center text-kerbl-green'>
                  <value.icon size={20} />
                </div>
                <CardTitle className='text-lg'>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
