"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-principal.png"
              alt="Dupla Vermelha"
              width={250}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/artigos"
              className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Artigos
            </Link>
            <Link
              href="/dicionario"
              className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dicionário Político
            </Link>
            <Link
              href="/sobre"
              className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Conheça o projeto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-4">
            <Link
              href="/artigos"
              className="block text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Artigos
            </Link>
            <Link
              href="/dicionario"
              className="block text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dicionário Político
            </Link>
            <Link
              href="/sobre"
              className="block text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Conheça o projeto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
