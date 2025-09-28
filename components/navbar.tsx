"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Oportunidad", href: "#hero" },
    { name: "Productos", href: "#products" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Locales", href: "#locations" },
    { name: "Clientes", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/images/logo-la-bomba.png"
            alt="La Bomba Empanadas Tucumanas Logo"
            width={40}
            height={40}
            sizes="40px"
            quality={75}
            priority
            className="rounded-full bg-primary-yellow p-1"
          />
          <span className="text-lg font-bold text-dark-charcoal">Franquicias La Bomba</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-dark-charcoal hover:text-primary-yellow transition-colors"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
          <Link href="#contact" passHref>
            <Button className="bg-primary-yellow text-dark-charcoal hover:bg-primary-yellow/90 font-semibold ml-4">
              ¡Quiero mi franquicia!
            </Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm pb-4 shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-dark-charcoal hover:text-primary-yellow transition-colors"
                onClick={() => setIsOpen(false)}
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact" passHref>
              <Button className="bg-primary-yellow text-dark-charcoal hover:bg-primary-yellow/90 font-semibold mt-2 w-4/5">
                ¡Quiero mi franquicia!
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
