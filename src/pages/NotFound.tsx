import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import PageHeader from "../components/ui/PageHeader"
import usePageTitle from "../hooks/usePageTitle"

const NotFound = () => {
  usePageTitle("404")

  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:py-32">
        <PageHeader
          eyebrow="404"
          title="Page Not Found"
          description="The page you are looking for does not exist or may have been moved."
        />

        <Link to="/">
          <Button>
            <ArrowLeft
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back Home
          </Button>
        </Link>
      </section>
    </main>
  )
}

export default NotFound