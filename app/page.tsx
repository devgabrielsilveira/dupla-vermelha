import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Search, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredArticles = [
    {
      date: "19 Fev 2026",
      title: "O que é democracia e como ela funciona no Brasil",
      source: "Curiosidades Políticas",
      href: "/artigos/democracia-brasil",
      image: "/congresso-nacional-brasileiro-brasilia-arquitetura.jpg",
    },
    {
      date: "19 Fev 2026",
      title: "Entendendo os três poderes: Executivo, Legislativo e Judiciário",
      source: "Fundamentos",
      href: "/artigos/tres-poderes",
      image: "/supremo-tribunal-federal-stf-brasilia-justica.jpg",
    },
    {
      date: "19 Fev 2026",
      title: "A importância da Regulamentação das Redes Sociais",
      source: "Atualidade",
      href: "/artigos/regulamentacao-redes",
      image: "/regulamentacao-redes.png",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-balance leading-tight mb-6">
            Educação política acessível para todos
          </h1>

          <blockquote className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed my-18 italic border-l-4 border-primary pl-6">
            “Quando a educação não é libertadora, o sonho do oprimido é ser o opressor”
            <span className="not-italic font-medium text-foreground ">
              {" "}— Paulo Freire
            </span>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/artigos">
                Explorar Artigos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/dicionario">Dicionário Político</Link>
            </Button>
          </div>
        </div>
      </section>


        {/* Features */}
        <section className="container mb-24 mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className="border-2 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <Link href="/artigos">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-serif">Artigos</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Curiosidades, análises e explicações sobre temas políticos atuais e históricos
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card
              className="border-2 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <Link href="/dicionario">
                <CardHeader>
                  <Search className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-serif">Dicionário Político</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Busque e entenda termos políticos com definições claras e objetivas
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

          <Card
            className="border-2 hover:border-primary/50 transition-colors cursor-pointer"
          >
            <Link href="/sobre">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="font-serif">Conheça o Projeto</CardTitle>
                <CardDescription className="leading-relaxed">
                  Queremos trazer conteúdos acessíveis para quem quer aprender sobre política de forma descomplicada
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="container mb-24 mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold">Artigos em Destaque</h2>
            <Button asChild variant="ghost">
              <Link href="/artigos">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={article.href} className="block group">
                <Card className="overflow-hidden h-full hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{article.date}</p>
                    <CardTitle className="font-serif text-lg leading-tight text-balance group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{article.source}</p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
