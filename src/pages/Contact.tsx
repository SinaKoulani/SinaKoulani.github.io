import ContactSection from "../components/sections/Contact"
import usePageTitle from "../hooks/usePageTitle"

const Contact = () => {
  usePageTitle("Contact")

  return (
    <main>
      <ContactSection />
    </main>
  )
}

export default Contact