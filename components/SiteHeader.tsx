"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
    const pathname = usePathname()
    const isAuthPage = pathname === "/signin" || pathname === "/register"

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 rounded-lg z-50 w-3/4 items-center justify-center border border-rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container flex h-20 items-center justify-between rounded-lg">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-bold"
                    >
                        MailMaster
                    </motion.span>
                </Link>
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4">Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                                    <div className="grid gap-1">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="#"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">Email Campaigns</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Create and manage powerful email campaigns
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="h-10 px-4">Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                                    <div className="grid gap-1">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href="#"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">Documentation</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Learn how to build and customize your bots
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#templates" legacyBehavior passHref>
                                <NavigationMenuLink className="h-10 px-4 py-2">Templates</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#pricing" legacyBehavior passHref>
                                <NavigationMenuLink className="h-10 px-4 py-2">Pricing</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {!isAuthPage && (
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/signin">Log in</Link>
                        </Button>
                        <Button size="sm" className="mr-5"asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                )}
            </div>
        </motion.header>
    )
}
