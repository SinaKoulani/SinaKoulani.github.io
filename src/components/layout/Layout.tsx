import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"
import ScrollToTop from "./ScrollToTop"

const Layout = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />

      <NavBar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout