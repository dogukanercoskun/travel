import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Main from "./pages/Main"
import Footer from "./pages/Footer"
import NavbarHeader from './components/styled/Navbar';
import HomeStyle from "./components/styled/Home";
import MainStyle from "./components/styled/Main"
import FooterStyle from './components/styled/Footer';




function App() {
 

  return (
    <>
    <NavbarHeader>
    <Navbar />
    </NavbarHeader>
    <HomeStyle>
    <Home/>
    </HomeStyle>
    <MainStyle>
    <Main/>
    </MainStyle>
    <FooterStyle>
    <Footer/>
    </FooterStyle>
    </>
  )
}

export default App
