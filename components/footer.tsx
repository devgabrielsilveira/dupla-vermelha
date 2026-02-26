import { Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">

        {/* Parte superior */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Coluna 1 - Marca */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">
              Dupla Vermelha
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Educação política acessível para todos.

            </p>
          </div>

          {/* Coluna 2 - Mapa do Site */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground text-primary">
              Mapa do Site
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/artigos" className="hover:text-primary transition-colors">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/dicionario" className="hover:text-primary transition-colors">
                  Dicionário Político
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary transition-colors">
                  Conheça o Projeto
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Redes */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground text-primary">
              Redes Sociais
            </h4>

            <div className="flex flex-col items-center md:items-start gap-3">
              <a
                href="https://instagram.com/duplavermelha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@duplavermelha</span>
              </a>

              <a
                href="https://tiktok.com/@duplavermelha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.2V349.4A162.6,162.6,1,1,1,185,188.3v80.7a82.6,82.6,0,1,0,57.2,78.9V0h82.6a129.3,129.3,0,0,0,1.9,22.9A129.5,129.5,0,0,0,448,125.6Z"/>
                </svg>
                <span>@duplavermelha</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground text-center md:text-left">
          <p>
            © 2026 <span className="font-semibold text-primary">Dupla Vermelha</span>. 
            Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com objetivo educacional em parceria com a{" "}
            <a
              href="https://boemiasmk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline-offset-4 hover:underline font-bold"
            >
              Boêmia.smk
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}