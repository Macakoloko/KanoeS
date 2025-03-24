import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada</p>
        <Link href="/">
          <Button className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </PageTransition>
  )
}

export default NotFoundPage