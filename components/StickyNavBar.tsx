import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent , SheetTitle} from "@/components/ui/sheet";
import {
  Menu,
  MoonIcon,
  Mail,
  BarChart,
  Users,
  Settings,
  SearchIcon,
  ArrowRight,
} from "lucide-react";

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-900 dark:border-gray-800 dark:bg-gray-950 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email Marketing SaaS</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {" "}
          <Link
            href="#features"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            {" "}
            Features{" "}
          </Link>{" "}
          <Link
            href="#pricing"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            {" "}
            Pricing{" "}
          </Link>{" "}
          <Link
            href="#integrations"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            {" "}
            Integrations{" "}
          </Link>{" "}
          
          
        </nav>
        <div className="flex items-center gap-4">
 
          
                <Link href="/register">
              <Button variant="ghost" className="rounded-full hover:text-blue-600 ">
               Get Started  <ArrowRight className="ml-3"/>
                <span className="sr-only">Search</span>
              </Button>
              </Link>
         
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
                <SheetTitle>Links</SheetTitle>
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Campaigns
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Contacts
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Settings
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
