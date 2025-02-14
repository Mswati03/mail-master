import { Separator } from "@/components/ui/separator"
import { MountainIcon, MailIcon, MapPinIcon, TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-muted-foreground py-12 md:py-16 lg:py-20 i ">
    <div className="  w-full  container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-16 items-center mx-auto ">
      <div className="flex flex-col items-start gap-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MailIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Mail Master</span>
        </Link>
        <p className="text-sm leading-relaxed">
          Mail Master is a leading provider of email marketing services for businesses of all sizes.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <div className="space-y-2">
          <h5 className="text-sm font-semibold">Products</h5>
          <nav className="space-y-1">
            
            <Link href="/" className="text-sm hover:underline" prefetch={false}>
              Email Marketing
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h5 className="text-sm font-semibold">Company</h5>
          <nav className="space-y-1 inline-block">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
           
          </nav>
        </div>
      </div>
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <div className="space-y-1">
          <h5 className="text-sm font-semibold">Contact</h5>
          <p className="text-sm">
            <MailIcon className="mr-2 inline-block h-4 w-4" />
            admin@mailmaster.co.ls
          </p>
          <p className="text-sm">
            <MapPinIcon className="mr-2 inline-block h-4 w-4" />
            Maseru,Lesotho
          </p>
        </div>
      
      </div>
     
      
    </div>
    <div className="mt-12 border-t border-muted-foreground/20 pt-6 text-center text-sm">
      <p>&copy; 2025 Mail Master. All rights reserved.</p>
    </div>
  </footer>  )
}

