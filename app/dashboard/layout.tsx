"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Mail, MenuIcon, Settings, Users, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: Mail },
  { name: "Subscribers", href: "/dashboard/subscribers", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center gap-2 px-4 py-2 border-b bg-background">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
        <Mail className="h-6 w-6" />
        <span className="font-semibold">Email Marketing</span>
      </div>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-background">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <div className="flex items-center gap-2">
                <Mail className="h-6 w-6" />
                <span className="font-semibold">Email Marketing</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r">
        <div className="flex flex-col flex-grow bg-background">
          <div className="flex items-center gap-2 px-4 py-4 border-b">
            <Mail className="h-6 w-6" />
            <span className="font-semibold">Email Marketing</span>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="lg:pl-64">
        <main className="py-6 px-4 sm:px-6 lg:px-8  mt-10">{children}</main>
      </div>
    </div>
  );
}
