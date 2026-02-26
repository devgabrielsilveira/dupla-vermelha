"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react"

export default function ArtigosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const articles = [
    {
      id: "democracia-brasil",
      title: "O que é democracia e como ela funciona no Brasil",
      excerpt:
        "Entenda como funciona o sistema democrático brasileiro, onde os cidadãos elegem representantes para tomar decisões políticas em seu nome.",
      category: "Fundamentos",
      date: "19 fev 2025",
      readTime: "5 min",
      image: "/congresso-nacional-brasileiro-brasilia.jpg",
      keywords: ["democracia", "representativa", "brasil", "eleições", "cidadãos"],
    },
    {
      id: "tres-poderes",
      title: "Entendendo os três poderes: Executivo, Legislativo e Judiciário",
      excerpt:
        "Conheça a estrutura básica do Estado brasileiro e como funciona a separação e harmonia entre os três poderes.",
      category: "Fundamentos",
      date: "19 fev 2025",
      readTime: "7 min",
      image: "/palacio-do-planalto-tres-poderes-brasilia.jpg",
      keywords: ["três poderes", "executivo", "legislativo", "judiciário", "estado", "constituição"],
    },
    {
      id: "regulamentacao-redes",
      title: "A importância da Regulamentação das Redes Sociais",
      excerpt:
        "Entenda ca importância da regulamentação das redes sociais.",
      category: "História",
      date: "19 fev 2025",
      readTime: "8 min",
      image: "/regulamentacao-redes.png",
      keywords: ["voto", "história", "eleições", "império", "direitos", "universal"],
    },
    
  ]

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles

    const query = searchQuery.toLowerCase()
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.keywords.some((keyword) => keyword.toLowerCase().includes(query)),
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Artigos</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-24">
            Explore nossos artigos sobre política, desde conceitos básicos até análises de temas contemporâneos.
          </p>

          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Pesquisar artigos por palavras-chave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-6">
              {filteredArticles.length} {filteredArticles.length === 1 ? "artigo encontrado" : "artigos encontrados"}
            </p>
          )}

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/artigos/${article.id}`}>
                  <Card className="hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden h-full group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="text-xs text-muted-foreground">• {article.readTime} de leitura</span>
                      </div>
                      <CardTitle className="font-serif text-xl leading-tight text-balance group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mt-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum artigo encontrado para sua pesquisa.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
