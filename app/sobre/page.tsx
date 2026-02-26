import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Instagram } from "lucide-react"

export default function SobrePage() {
    const creators = [
    {
      name: "Thay Vasconcellos",
      role: "Co-fundadora & Editora",
      bio: "Aqui vai uma descrição sobre a Thay",
      image: "/foto-thay.png",
      instagram: "https://instagram.com/comunisthay",
      instagramUser: "@comunisthay",
      tiktok: "https://tiktok.com/@thayzinhaolivei",
      tiktokUser: "@thayzinhaolivei",
    },
    {
      name: "Bruna Dall’ Agnol",
      role: "Co-fundadora & Pesquisadora",
      bio: "Aqui vai uma descrição sobre a Bruna",
      image: "/foto-bruna.png",
      instagram: "https://instagram.com/brunadallagnol08",
      instagramUser: "@brunadallagnol08",
      tiktok: "https://tiktok.com/@brudallagnol7",
      tiktokUser: "@brudallagnol7",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12">Sobre o Dupla Vermelha</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                O <span className="font-semibold text-primary">Dupla Vermelha</span> nasceu da necessidade de
                democratizar o conhecimento político no Brasil. Vivemos em uma democracia onde a participação cidadã é
                fundamental, mas muitas vezes o acesso à informação política clara e objetiva é um desafio.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                Nossa missão é tornar a política acessível a todos, sem jargões complicados ou viés partidário.
                Acreditamos que cidadãos bem informados são a base de uma democracia forte e participativa. Por isso,
                criamos um espaço onde curiosidades políticas, conceitos fundamentais e análises de temas atuais se
                encontram de forma clara e educativa.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-12">
                Através de artigos cuidadosamente pesquisados e um dicionário político abrangente, buscamos empoderar
                cada pessoa a compreender melhor o funcionamento das instituições, os processos políticos e os debates
                contemporâneos que moldam nosso país.
              </p>
            </div>
              <div className="mt-6">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Siga o <span className="font-semibold text-primary">Dupla Vermelha</span> nas redes sociais:
                </p>

                <div className="flex flex-col gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/duplavermelha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span>Instagram</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com/@duplavermelha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6 w-6 fill-current"
                    >
                      <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.2V349.4A162.6,162.6,0,1,1,185,188.3v80.7a82.6,82.6,0,1,0,57.2,78.9V0h82.6a129.3,129.3,0,0,0,1.9,22.9A129.5,129.5,0,0,0,448,125.6Z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
          </div>

          {/* Creators Section */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 text-center my-24">As Criadoras</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {creators.map((creator) => (
                <Card key={creator.name} className="overflow-hidden">
                  <div className="relative h-64 md:h-80">
                    <Image src={creator.image || "/placeholder.svg"} alt={creator.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-1">{creator.name}</h3>
                    <p className="text-sm text-primary font-medium mb-4">{creator.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{creator.bio}</p>
                    <div className="flex flex-col gap-3 mt-4">
                      {/* Instagram */}
                      <a
                        href={creator.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>{creator.instagramUser}</span>
                      </a>

                      {/* TikTok */}
                      <a
                        href={creator.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-5 w-5 fill-current"
                        >
                          <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.2V349.4A162.6,162.6,0,1,1,185,188.3v80.7a82.6,82.6,0,1,0,57.2,78.9V0h82.6a129.3,129.3,0,0,0,1.9,22.9A129.5,129.5,0,0,0,448,125.6Z"/>
                        </svg>
                        <span>{creator.tiktokUser}</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
