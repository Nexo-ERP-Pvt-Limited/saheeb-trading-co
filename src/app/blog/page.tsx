import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'

// Mock Data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'Advancements in Surgical Instrument Manufacturing',
    excerpt:
      'Explore how modern technology is reshaping the production of surgical tools, ensuring higher precision and durability.',
    date: 'October 15, 2025',
    author: 'Admin',
    image: '/blog-1.jpg', // Placeholder, will fallback
    category: 'Manufacturing',
  },
  {
    id: 2,
    title: 'The Importance of High-Quality Veterinary Dental Tools',
    excerpt:
      'Proper dental care for animals requires specialized instruments. Learn about the key features of our veterinary dental range.',
    date: 'September 28, 2025',
    author: 'Dr. Sarah Smith',
    image: '/blog-2.jpg',
    category: 'Veterinary',
  },
  {
    id: 3,
    title: 'Saheeb Trading Co. Expands Global Distribution',
    excerpt:
      'We are proud to announce our new partnerships in Europe and North America, bringing our quality products to a wider market.',
    date: 'September 10, 2025',
    author: 'Admin',
    image: '/blog-3.jpg',
    category: 'Company News',
  },
  {
    id: 4,
    title: 'Maintaining Your Surgical Instruments: Best Practices',
    excerpt:
      'Maximize the lifespan of your instruments with these essential cleaning, sterilization, and storage tips.',
    date: 'August 22, 2025',
    author: 'Technical Team',
    image: '/blog-4.jpg',
    category: 'Guides',
  },
  {
    id: 5,
    title: 'Innovations in Electrosurgery',
    excerpt:
      'A look at the latest trends in electrosurgical units and accessories, and how they improve patient outcomes.',
    date: 'August 05, 2025',
    author: 'Admin',
    image: '/blog-5.jpg',
    category: 'Medical Technology',
  },
  {
    id: 6,
    title: 'Understanding Steel Grades in Instrument Making',
    excerpt:
      'Not all steel is created equal. We break down the differences between various stainless steel grades used in our products.',
    date: 'July 18, 2025',
    author: 'Production Manager',
    image: '/blog-6.jpg',
    category: 'Materials',
  },
]

export default function BlogPage() {
  return (
    <main className='min-h-screen font-sans bg-gray-50/50'>
      {/* Hero Section */}
      <section className='bg-slate-900 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Blog & News</h1>
          <p className='text-lg text-slate-300 max-w-2xl mx-auto'>
            Stay updated with the latest industry trends, product launches, and
            company news from Saheeb Trading Co.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className='py-20 container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {BLOG_POSTS.map((post) => (
            <Card
              key={post.id}
              className='flex flex-col h-full border-border/50 hover:shadow-lg transition-shadow duration-300 overflow-hidden group'
            >
              {/* Image Area */}
              <div className='relative h-56 w-full bg-muted overflow-hidden'>
                {/* We don't have real images, so using a colored placeholder with text */}
                <div className='absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500'>
                  <span className='text-4xl font-bold opacity-20'>IMAGE</span>
                </div>
                {/* Real Image component (commented out until images exist)
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                */}
                <div className='absolute top-4 left-4 bg-kerbl-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide'>
                  {post.category}
                </div>
              </div>

              <CardHeader className='p-6 pb-3 space-y-2'>
                <div className='flex items-center text-xs text-muted-foreground gap-4'>
                  <div className='flex items-center gap-1'>
                    <Calendar className='h-3 w-3' />
                    {post.date}
                  </div>
                  <div className='flex items-center gap-1'>
                    <User className='h-3 w-3' />
                    {post.author}
                  </div>
                </div>
                <h2 className='text-xl font-bold text-gray-900 leading-tight group-hover:text-kerbl-green transition-colors'>
                  <Link href={`#post-${post.id}`}>{post.title}</Link>
                </h2>
              </CardHeader>

              <CardContent className='p-6 pt-0 flex-grow'>
                <p className='text-muted-foreground text-sm leading-relaxed line-clamp-3'>
                  {post.excerpt}
                </p>
              </CardContent>

              <CardFooter className='p-6 pt-0'>
                <Button
                  variant='link'
                  className='p-0 h-auto text-kerbl-green font-semibold hover:text-kerbl-green-dark hover:no-underline group/btn'
                >
                  Read More
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
