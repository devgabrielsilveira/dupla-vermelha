
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const articles = {
  "democracia-brasil": {
    title: "O que é democracia e como ela funciona no Brasil",
    category: "Fundamentos",
    date: "19 Fev 2026",
    readTime: "5 min",
    image: "/congresso-nacional-brasileiro-brasilia-arquitetura.jpg",
    content: `
      <p>A democracia é o sistema político em que o poder emana do povo. No Brasil, ela é exercida por meio do voto e da participação cidadã, garantindo que a população escolha seus representantes e influencie as decisões que impactam a sociedade.</p>

      <h2>O que significa Democracia</h2>
      <p>A palavra democracia vem do grego “demos” (povo) e “kratos” (poder), significando literalmente “poder do povo”. Em uma democracia, os governantes não assumem o poder por herança ou imposição, mas são escolhidos pela população por meio de eleições periódicas, livres e transparentes.</p>

      <h2>Democracia representativa no Brasil</h2>
      <p>O Brasil adota o modelo de democracia representativa. Isso significa que os cidadãos elegem representantes — como vereadores, deputados, senadores, governadores e presidente — para tomar decisões em nome da sociedade. Esses representantes atuam nos Poderes Legislativo e Executivo, enquanto o Judiciário garante o cumprimento das leis e da Constituição.</p>

      <h2>Os três poderes</h2>
      <p>A democracia brasileira é organizada com base na separação de três poderes independentes e harmônicos entre si: Executivo (responsável por governar e administrar), Legislativo (responsável por criar e fiscalizar as leis) e Judiciário (responsável por interpretar e aplicar as leis). Esse equilíbrio evita abusos e concentrações excessivas de poder.</p>

      <h2>O papel das eleições</h2>
      <p>As eleições são o principal instrumento de participação popular. No Brasil, o voto é direto e secreto. Ele é obrigatório para cidadãos entre 18 e 70 anos, e facultativo para jovens de 16 e 17 anos, maiores de 70 e analfabetos. Por meio do voto, a população escolhe seus representantes e pode promover alternância de poder.</p>

      <h2>Participação além do voto</h2>
      <p>A democracia não se resume às eleições. A participação popular também acontece por meio de conselhos, audiências públicas, iniciativas populares de lei, plebiscitos e referendos. Além disso, a liberdade de expressão e o direito à manifestação são pilares fundamentais do regime democrático.</p>

      <h2>Desafios da democracia brasileira</h2>
      <p>Embora consolidada pela Constituição de 1988, a democracia brasileira enfrenta desafios como desigualdade social, desinformação, polarização política e baixa participação cívica. Fortalecer instituições, promover educação política e incentivar o diálogo são caminhos essenciais para o seu aperfeiçoamento.</p>

      <p>Compreender o funcionamento da democracia é fundamental para exercer a cidadania de forma consciente. Quando a população participa, fiscaliza e cobra seus representantes, a democracia se fortalece e cumpre seu verdadeiro propósito: servir ao povo.</p>
    `,
  },
  "tres-poderes": {
    title: "Entendendo os três poderes: Executivo, Legislativo e Judiciário",
    category: "Fundamentos",
    date: "19 Fev 2026",
    readTime: "7 min",
    image: "/supremo-tribunal-federal-palacio-justica-brasilia.jpg",
    content: `
      <p>O Brasil adota o princípio da separação dos três poderes como base da sua organização política. Esse modelo garante equilíbrio, evita abusos de autoridade e assegura que nenhuma instituição concentre poder excessivo. Entender como funcionam o Executivo, o Legislativo e o Judiciário é fundamental para compreender como o país é governado.</p>

      <h2>Poder Executivo</h2>
      <p>O Poder Executivo é responsável por governar e administrar o país, colocando em prática as leis aprovadas pelo Legislativo. No âmbito federal, é exercido pelo Presidente da República; nos estados, pelos Governadores; e nos municípios, pelos Prefeitos. Cabe ao Executivo planejar políticas públicas, administrar recursos, executar obras e serviços e propor projetos de lei.</p>

      <h2>Poder Legislativo</h2>
      <p>O Poder Legislativo tem como principal função elaborar, discutir e modificar as leis. Além disso, também fiscaliza as ações do Executivo. No âmbito federal, é representado pelo Congresso Nacional, formado pela Câmara dos Deputados e pelo Senado. Nos estados, atua por meio das Assembleias Legislativas, e nos municípios, pelas Câmaras de Vereadores.</p>

      <h2>Poder Judiciário</h2>
      <p>O Poder Judiciário é responsável por interpretar e aplicar as leis, garantindo que a Constituição seja respeitada. Ele resolve conflitos entre cidadãos, empresas e o próprio Estado. Fazem parte do Judiciário os juízes, tribunais estaduais e federais, além dos tribunais superiores, como o Supremo Tribunal Federal (STF), que é o guardião da Constituição.</p>

      <h2>Equilíbrio e fiscalização</h2>
      <p>Os três poderes são independentes, mas atuam de forma harmônica e com mecanismos de controle mútuo. O Legislativo fiscaliza o Executivo, o Executivo pode vetar projetos de lei, e o Judiciário pode declarar leis inconstitucionais. Esse sistema de freios e contrapesos fortalece a democracia e protege os direitos da população.</p>

      <p>Compreender o papel de cada poder ajuda o cidadão a acompanhar decisões públicas, cobrar responsabilidades e participar de forma mais consciente da vida política. Uma democracia forte depende de instituições equilibradas e de uma sociedade bem informada.</p>
          `,
  },
  "regulamentacao-redes": {
    title: "A importância da Regulamentação das Redes Sociais",
    category: "Atualidade",
    date: "19 Fev 2026",
    readTime: "8 min",
    image: "/regulamentacao-redes.png",
    content: `
      <p>As redes sociais transformaram a forma como nos comunicamos, consumimos informação e participamos da vida pública. No entanto, junto com os benefícios da conectividade, surgiram desafios como a disseminação de desinformação, discursos de ódio e ataques à democracia. Por isso, o debate sobre a regulamentação das redes sociais tornou-se central no Brasil e no mundo.</p>

      <h2>Liberdade de expressão e responsabilidade</h2>
      <p>A liberdade de expressão é um direito fundamental garantido pela Constituição. Porém, ela não é absoluta. Assim como na vida fora da internet, crimes como calúnia, racismo, ameaças e incitação à violência também precisam ser responsabilizados no ambiente digital. A regulamentação busca equilibrar liberdade com responsabilidade.</p>

      <h2>O combate à desinformação</h2>
      <p>A circulação massiva de fake news impacta eleições, políticas públicas e a confiança nas instituições. Plataformas digitais possuem grande alcance e poder de influência, mas nem sempre assumem responsabilidades proporcionais ao seu impacto. Estabelecer regras claras ajuda a proteger a sociedade contra manipulações e campanhas coordenadas de desinformação.</p>

      <h2>Transparência das plataformas</h2>
      <p>Outro ponto central é a necessidade de maior transparência. Como funcionam os algoritmos? Por que determinados conteúdos são impulsionados? A regulamentação pode exigir que empresas divulguem critérios de moderação e funcionamento, permitindo maior controle social e evitando abusos.</p>

      <h2>Proteção de crianças e adolescentes</h2>
      <p>Ambientes digitais sem regras claras expõem jovens a riscos como exploração, violência psicológica e conteúdos prejudiciais. Políticas de regulamentação podem fortalecer mecanismos de proteção e exigir medidas mais eficazes das empresas para garantir segurança online.</p>

      <h2>Fortalecimento da democracia</h2>
      <p>Ao estabelecer limites e responsabilidades, a regulamentação das redes sociais contribui para um ambiente digital mais saudável e democrático. O objetivo não é censurar opiniões, mas criar regras que impeçam abusos, protejam direitos e assegurem que o espaço público digital seja compatível com os princípios democráticos.</p>

      <p>O desafio está em construir uma legislação equilibrada, que preserve direitos individuais e, ao mesmo tempo, responsabilize grandes plataformas pelo impacto social de suas operações. O debate é complexo, mas essencial para o futuro da democracia no século XXI.</p>
    `,
  },
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Button
              asChild
              variant="ghost"
              className="mb-8 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <Link href="/artigos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para artigos
              </Link>
            </Button>

            <div className="bg-background/95 backdrop-blur-sm rounded-lg p-8 mb-8 border">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance leading-tight mb-4">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>

                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} de leitura
                </span>
              </div>
            </div>

            <article
              className="prose prose-lg max-w-none bg-background/95 backdrop-blur-sm rounded-lg p-8 border"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: "1.7",
              }}
            />



          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
