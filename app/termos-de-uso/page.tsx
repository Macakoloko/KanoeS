"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermosDeUsoPage() {
  return (
    
      <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="flex items-center text-kanoe-beige mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para a Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Termos de <span className="text-kanoe-beige">Uso</span>
            </h1>
            <p className="text-gray-300">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-kanoe-beige prose-a:text-kanoe-beige">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Kanoê Digital ("nós", "nosso" ou "nossa"), você concorda em cumprir e
              estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá
              acessar ou utilizar nosso site e serviços.
            </p>

            <h2>2. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em
              vigor imediatamente após a publicação dos termos atualizados. Seu uso continuado do site após a publicação
              das alterações constitui aceitação dos novos termos.
            </p>

            <h2>3. Uso do Site</h2>
            <p>
              Você concorda em utilizar o site apenas para fins legais e de maneira que não infrinja os direitos de
              terceiros ou restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.
            </p>
            <p>É proibido:</p>
            <ul>
              <li>
                Utilizar o site de qualquer maneira que possa causar danos ao site ou prejudicar sua disponibilidade ou
                acessibilidade
              </li>
              <li>
                Utilizar o site para transmitir ou publicar qualquer material ilegal, ameaçador, difamatório, obsceno ou
                de qualquer forma censurável
              </li>
              <li>
                Utilizar o site para transmitir ou publicar qualquer material que contenha vírus, malware ou outros
                códigos maliciosos
              </li>
              <li>Realizar engenharia reversa, descompilar ou desmontar qualquer parte do site</li>
            </ul>

            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente no site, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones,
              imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Kanoê Digital ou de
              seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais e propriedade intelectual.
            </p>
            <p>
              Você não pode reproduzir, distribuir, modificar, exibir publicamente, executar publicamente, republicar,
              baixar, armazenar ou transmitir qualquer material do nosso site sem nossa permissão prévia por escrito.
            </p>

            <h2>5. Contas de Usuário</h2>
            <p>
              Alguns serviços ou áreas do site podem exigir registro ou criação de uma conta. Você é responsável por
              manter a confidencialidade de suas informações de conta, incluindo senha, e por todas as atividades que
              ocorrerem sob sua conta.
            </p>

            <h2>6. Privacidade</h2>
            <p>
              Nosso uso de suas informações pessoais é regido por nossa{" "}
              <Link href="/politica-de-privacidade">Política de Privacidade</Link>. Ao utilizar nosso site, você
              concorda com a coleta e uso de suas informações conforme descrito em nossa Política de Privacidade.
            </p>

            <h2>7. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a Kanoê Digital, seus diretores, funcionários ou agentes serão responsáveis por
              quaisquer danos diretos, indiretos, incidentais, especiais, punitivos ou consequentes decorrentes do uso
              ou incapacidade de uso do site ou serviços.
            </p>

            <h2>8. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua
              conveniência. Não temos controle sobre o conteúdo desses sites e não somos responsáveis por seu conteú Não
              temos controle sobre o conteúdo desses sites e não somos responsáveis por seu conteúdo ou práticas de
              privacidade. A inclusão de qualquer link não implica endosso, aprovação ou controle por parte da Kanoê
              Digital.
            </p>

            <h2>9. Indenização</h2>
            <p>
              Você concorda em indenizar e isentar a Kanoê Digital, seus diretores, funcionários e agentes de qualquer
              responsabilidade, danos ou custos, incluindo honorários advocatícios razoáveis, decorrentes de qualquer
              violação destes Termos de Uso ou de qualquer atividade relacionada à sua conta.
            </p>

            <h2>10. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso serão regidos e interpretados de acordo com as leis de Portugal, sem considerar seus
              princípios de conflito de leis.
            </p>

            <h2>11. Resolução de Disputas</h2>
            <p>
              Qualquer disputa decorrente ou relacionada a estes Termos de Uso será submetida à jurisdição exclusiva dos
              tribunais de Portugal.
            </p>

            <h2>12. Disposições Gerais</h2>
            <p>
              Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, tal disposição será
              eliminada e as disposições restantes permanecerão em pleno vigor e efeito.
            </p>
            <p>
              Nossa falha em fazer valer qualquer direito ou disposição destes Termos de Uso não constituirá uma
              renúncia a tal direito ou disposição.
            </p>

            <h2>13. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco pelo e-mail
              contato@kanoe.digital ou pelo telefone +351 936 356 199.
            </p>
          </div>
        </div>
      </section>
    </div>
    
  )
}

