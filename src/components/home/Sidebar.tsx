import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Sidebar() {
  return (
    <div className="space-y-12">
      {/* Catalogues */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Discover the latest flip catalogues</h3>
        <Link href="#" className="block group">
           <div className="aspect-[3/4] w-full bg-gray-100 relative shadow-md group-hover:shadow-xl transition-shadow overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1887&auto=format&fit=crop"
                    alt="Catalogue"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                   <span className="text-white font-bold">New Collection 2026</span>
                </div>
           </div>
        </Link>
        <Button asChild className="w-full bg-kerbl-green hover:bg-kerbl-green-dark text-white font-bold rounded-sm">
           <Link href="#">To overview</Link>
        </Button>
      </div>

      {/* News */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">News</h3>
        <Separator />

        <div className="space-y-6">
            <article>
                <Link href="#" className="hover:underline">
                    <h4 className="text-kerbl-green font-bold text-sm uppercase mb-1">Second PLUS X AWARD for Aesculap</h4>
                    <p className="text-gray-600 text-sm">Recognized for innovation and high quality.</p>
                </Link>
            </article>
             <article>
                <Link href="#" className="hover:underline">
                    <h4 className="text-kerbl-green font-bold text-sm uppercase mb-1">Aesculap receives PLUS X AWARD</h4>
                    <p className="text-gray-600 text-sm">Awarded for high quality, design and functionality.</p>
                </Link>
            </article>
            <article>
                <Link href="#" className="hover:underline">
                    <h4 className="text-kerbl-green font-bold text-sm uppercase mb-1">Kerbl at the Interzoo trade fair 2024</h4>
                    <p className="text-gray-600 text-sm">Visit us at the world&apos;s leading trade fair.</p>
                </Link>
            </article>
        </div>
      </div>
    </div>
  )
}
