import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Agricultural Supplies",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
    color: "bg-kerbl-green",
    href: "#",
    colSpan: "col-span-1"
  },
  {
    title: "Horses",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop",
    color: "bg-kerbl-green",
    href: "#",
    colSpan: "col-span-1"
  },
  {
    title: "Protective Equipment",
    image: "https://images.unsplash.com/photo-1584036561566-b452744e4950?q=80&w=2070&auto=format&fit=crop",
    color: "bg-kerbl-green",
    href: "#",
    colSpan: "col-span-1"
  },
  {
    title: "Pet",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    color: "bg-kerbl-green",
    href: "#",
    colSpan: "col-span-1"
  },
  {
    title: "Hobby Farming",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop",
    color: "bg-kerbl-green",
    href: "#",
    colSpan: "col-span-1"
  },
    {
    title: "Fencing",
    image: "https://images.unsplash.com/photo-1599156627038-d621b02014de?q=80&w=2069&auto=format&fit=crop",
    color: "bg-kerbl-green",
    href: "#",
    colSpan: "col-span-1"
  },
]

export function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 -mt-10 relative z-30 mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
        {categories.map((category, index) => (
          <Link href={category.href} key={index} className={cn("group relative block overflow-hidden shadow-lg", category.colSpan)}>
            <div className="aspect-[4/3] w-full relative">
               <div className="absolute inset-0 bg-gray-200">
                    {/* Use next/image for production, plain img for prototype speed/compatibility if domain not config */}
                    <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
               </div>
               <div className={cn("absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold uppercase", category.color)}>
                  {category.title}
               </div>
               {/* Mobile readability gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent lg:hidden" />
               <div className="absolute bottom-2 left-2 text-white font-bold lg:hidden text-sm">
                   {category.title}
               </div>
            </div>

            {/* Desktop Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:flex items-center justify-center">
                 <span className="text-white font-bold border-2 border-white px-4 py-2 uppercase tracking-wider">Explore</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
