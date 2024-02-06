// import Navbar from "./components/Navbar"
import { NavbarSimple } from "./components/Navbar"
import Reception from "./components/Reception"
import About from "./components/About"
import Footer from "./components/Footer"
import TitleModel from "./components/Title"
import Cardapio from "./components/Cardapio"
import Socials from "./components/Socials"
function App() {

  return (
    <>
    <div>
      <NavbarSimple />
      <Reception />
      <About/>
      <Cardapio/>
      <Socials/>
      {/* <TitleModel subtitle={"Produtos"} title={"NÓS OFERECEMOS"}/> */}
<Footer/>
    </div>
    </>
  )
}

export default App
