import Footer from "../components/Footer"
import Header from "../components/Header"
import Routers from "../routes/Routers"


const Layout = () => {
  return (
    <>
    <Header/>
    <main>
      <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout