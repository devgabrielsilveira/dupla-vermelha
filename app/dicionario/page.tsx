"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"
import { useState, useMemo } from "react"

const termosPoliticos = [
  {
    termo: "Democracia",
    definicao:
      "Sistema político em que o poder é exercido pelo povo, diretamente ou por meio de representantes eleitos. No Brasil, adotamos a democracia representativa.",
  },
  {
    termo: "República",
    definicao:
      "Forma de governo em que os representantes são eleitos pelo povo para mandatos definidos, em oposição à monarquia hereditária.",
  },
  {
    termo: "Federação",
    definicao:
      "Forma de organização do Estado em que estados ou províncias têm autonomia, mas se unem sob um governo central. O Brasil é uma federação.",
  },
  {
    termo: "Presidencialismo",
    definicao:
      "Sistema de governo em que o presidente é chefe de Estado e de governo, eleito separadamente do Legislativo.",
  },
  {
    termo: "Parlamentarismo",
    definicao:
      "Sistema de governo em que o chefe de governo (primeiro-ministro) é escolhido pelo parlamento e depende de sua confiança para governar.",
  },
  {
    termo: "Poder Executivo",
    definicao:
      "Poder responsável pela administração pública e execução das leis. No Brasil, é exercido pelo presidente da República, governadores e prefeitos.",
  },
  {
    termo: "Poder Legislativo",
    definicao:
      "Poder responsável por elaborar leis e fiscalizar o Executivo. No Brasil, é exercido pelo Congresso Nacional (Câmara e Senado), assembleias e câmaras municipais.",
  },
  {
    termo: "Poder Judiciário",
    definicao:
      "Poder responsável por interpretar e aplicar as leis, garantindo justiça. No Brasil, o STF é a instância máxima.",
  },
  {
    termo: "Impeachment",
    definicao:
      "Processo político-jurídico para afastar autoridades por crimes de responsabilidade. Requer aprovação qualificada do Legislativo.",
  },
  {
    termo: "Veto",
    definicao:
      "Poder do Executivo de rejeitar projetos de lei aprovados pelo Legislativo. Pode ser derrubado por maioria qualificada do Congresso.",
  },
  {
    termo: "Medida Provisória",
    definicao:
      "Ato do presidente com força de lei, usado em casos urgentes. Precisa ser aprovada pelo Congresso em até 120 dias para se tornar lei permanente.",
  },
  {
    termo: "Constituição",
    definicao:
      "Lei máxima de um país, que estabelece direitos fundamentais, organização do Estado e limites do poder. A brasileira atual é de 1988.",
  },
  {
    termo: "Emenda Constitucional",
    definicao:
      "Modificação da Constituição que requer aprovação de 3/5 dos membros da Câmara e do Senado em dois turnos de votação.",
  },
  {
    termo: "Bicameralismo",
    definicao:
      "Sistema legislativo com duas câmaras (Câmara dos Deputados e Senado Federal). Ambas precisam aprovar leis federais.",
  },
  {
    termo: "Voto Proporcional",
    definicao:
      "Sistema eleitoral em que cadeiras são distribuídas proporcionalmente aos votos recebidos pelos partidos. Usado para deputados e vereadores.",
  },
  {
    termo: "Voto Majoritário",
    definicao:
      "Sistema em que vence o candidato com mais votos. Usado para presidente, governadores, prefeitos e senadores no Brasil.",
  },
  {
    termo: "Quociente Eleitoral",
    definicao:
      "Cálculo usado no sistema proporcional para determinar quantos votos são necessários para eleger um candidato.",
  },
  {
    termo: "Coligação",
    definicao:
      "União de partidos políticos para disputar eleições. Desde 2020, não é mais permitida para eleições proporcionais.",
  },
  {
    termo: "Fundo Partidário",
    definicao:
      "Recursos públicos distribuídos aos partidos políticos para financiar suas atividades e campanhas eleitorais.",
  },
  {
    termo: "Nepotismo",
    definicao:
      "Prática de nomear parentes para cargos públicos, considerada ilegal no Brasil pela Súmula Vinculante 13 do STF.",
  },
  {
  termo: "Comunismo",
  definicao:
    "Ideologia política e econômica que defende a superação da propriedade privada dos meios de produção e a construção de uma sociedade sem classes sociais. Em sua forma teórica, busca igualdade econômica e social."
  },
  {
    termo: "Socialismo",
    definicao:
      "Corrente política e econômica que propõe maior igualdade social por meio da redução das desigualdades e, em diferentes modelos, maior participação do Estado na economia."
  },
  {
    termo: "Capitalismo",
    definicao:
      "Sistema econômico baseado na propriedade privada, livre iniciativa e busca por lucro. A produção e a distribuição de bens são organizadas principalmente pelo mercado."
  },
  {
    termo: "Fascismo",
    definicao:
      "Ideologia autoritária e nacionalista surgida no século XX, marcada por centralização do poder, repressão à oposição, culto ao líder e limitação de liberdades civis."
  },
  {
    termo: "Nazismo",
    definicao:
      "Ideologia totalitária liderada por Adolf Hitler na Alemanha, baseada em nacionalismo extremo, racismo, antissemitismo e perseguição sistemática a minorias."
  },
  {
    termo: "Ditadura",
    definicao:
      "Regime político em que o poder se concentra em uma pessoa ou grupo, sem eleições livres e com restrições às liberdades civis e políticas."
  },
  {
    termo: "Autoritarismo",
    definicao:
      "Sistema ou prática política caracterizada pela concentração de poder, limitação da participação popular e restrição de direitos e liberdades."
  },
  {
    termo: "Totalitarismo",
    definicao:
      "Forma extrema de autoritarismo em que o Estado busca controlar amplamente a vida pública e privada, incluindo mídia, economia e organização social."
  },
  {
    termo: "Anarquismo",
    definicao:
      "Corrente política que defende a ausência de Estado e de hierarquias coercitivas, propondo formas de organização baseadas em cooperação voluntária."
  },
  {
    termo: "Neoliberalismo",
    definicao:
      "Conjunto de políticas econômicas que defendem redução da intervenção do Estado na economia, privatizações e fortalecimento do livre mercado."
  },
  {
    termo: "Ideologia de Gênero",
    definicao:
      "Expressão utilizada em debates políticos para criticar estudos de gênero. Não é um conceito acadêmico formal, sendo frequentemente usada de forma controversa no debate público."
  },
  {
    termo: "Estado Laico",
    definicao:
      "Princípio segundo o qual o Estado não adota religião oficial e deve garantir liberdade religiosa e igualdade entre diferentes crenças."
  },
  {
    termo: "Liberdade de Expressão",
    definicao:
      "Direito fundamental que garante a manifestação de opiniões e ideias, respeitando os limites estabelecidos pela Constituição e pelas leis."
  },
  {
    termo: "Censura",
    definicao:
      "Restrição ou proibição de manifestações, conteúdos ou opiniões por parte de autoridades ou instituições."
  },
  {
    termo: "Intervenção Militar",
    definicao:
      "Ação das Forças Armadas em assuntos internos ou externos de um país. No Brasil, sua atuação é regulada pela Constituição."
  },
  {
    termo: "Golpe de Estado",
    definicao:
      "Tomada de poder de forma ilegal ou inconstitucional, geralmente com ruptura das regras democráticas vigentes."
  },
  {
    termo: "Populismo",
    definicao:
      "Estratégia política que busca mobilizar apoio popular ao apresentar líderes como representantes diretos do povo contra elites ou instituições."
  },
  {
    termo: "Marxismo Cultural",
    definicao:
      "Expressão associada a teorias conspiratórias que afirmam existir um plano organizado para transformação cultural da sociedade. Não é um conceito reconhecido na academia."
  },
  {
    termo: "Fake News",
    definicao:
      "Conteúdo falso ou enganoso divulgado como se fosse informação verdadeira, com potencial de influenciar opiniões e decisões."
  },
  {
    termo: "Desinformação",
    definicao:
      "Divulgação intencional de informações falsas ou distorcidas com o objetivo de enganar ou manipular o público."
  },
  ]

export default function DicionarioPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTermos = useMemo(() => {
    if (!searchTerm) return termosPoliticos

    const search = searchTerm.toLowerCase()
    return termosPoliticos.filter(
      (item) => item.termo.toLowerCase().includes(search) || item.definicao.toLowerCase().includes(search),
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Dicionário Político</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-24">
            Busque e entenda termos políticos importantes. Digite no campo abaixo para encontrar definições.
          </p>

          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar termo político..."
              className="pl-10 h-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredTermos.length > 0 ? (
              filteredTermos.map((item, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{item.termo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.definicao}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Nenhum termo encontrado para "{searchTerm}". Tente outra busca.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
