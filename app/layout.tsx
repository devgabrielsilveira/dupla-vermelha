import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Inter } from "next/font/google"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Dupla Vermelha - Educação Política",
  description: "Portal de educação política com artigos, notícias e dicionário de termos políticos",
  generator: "Dupla Vermelha",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${libreBaskerville.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
