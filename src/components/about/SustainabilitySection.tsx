import { FadeIn } from '@/components/ui/motion-wrapper'
import { User, Building2, Leaf } from 'lucide-react'

const pillars = [
  {
    icon: User,
    title: 'People',
    points: [
      'Ensuring health, safety, and well-being of all employees',
      'Supporting professional development and growth',
      'Upholding labor and human rights',
    ],
    className:
      'bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300',
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Building2,
    title: 'Business',
    points: [
      'Investing in innovative products for well-being',
      'Maintaining strong customer alignment',
      'Ensuring sustainable growth with low risk',
    ],
    className:
      'bg-slate-50/50 dark:bg-slate-900/10 text-slate-700 dark:text-slate-300',
    iconClass: 'text-slate-600 dark:text-slate-400',
  },
  {
    icon: Leaf,
    title: 'Environment',
    points: [
      'Reducing environmental impact via efficiency',
      'Applying eco-design principles in development',
      'Auditing suppliers for compliance',
    ],
    className:
      'bg-green-50/50 dark:bg-green-900/10 text-green-700 dark:text-green-300',
    iconClass: 'text-green-600 dark:text-green-400',
  },
]

export function SustainabilitySection() {
  return (
    <section className='py-20 px-4 md:px-8 max-w-7xl mx-auto'>
      <FadeIn>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>
            Sustainability & Priorities
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            At Saheeb Trading Co, sustainability is not an option—it is a
            responsibility. We focus on the well-being of people, ethical
            operations, and long-term business stability.
          </p>
        </div>
      </FadeIn>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {pillars.map((pillar, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className={`p-8 rounded-2xl h-full ${pillar.className}`}>
              <div className='flex items-center gap-3 mb-6'>
                <pillar.icon className={`h-6 w-6 ${pillar.iconClass}`} />
                <h3 className='text-xl font-semibold'>{pillar.title}</h3>
              </div>
              <ul className='space-y-3'>
                {pillar.points.map((point, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-2 text-sm md:text-base'
                  >
                    <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0' />
                    <span className='opacity-90'>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
