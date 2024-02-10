// import Navbar from "./components/Navbar"
import { NavbarSimple } from "./components/Navbar"
import Reception from "./components/Reception"
import About from "./components/About"
import Footer from "./components/Footer"
import TitleModel from "./components/Title"
import Cardapio from "./components/Cardapio"
import Socials from "./components/Socials"
import Reviews from "./components/Reviews"
function App() {

  return (
    <>
    <div>
      <NavbarSimple />
      <Reception />
      <About/>
      <Cardapio/>
      <Socials/>
      <Reviews/>
      {/* <TitleModel subtitle={"Produtos"} title={"NÓS OFERECEMOS"}/> */}
<Footer/>
    </div>
    </>
  )
}

export default App
