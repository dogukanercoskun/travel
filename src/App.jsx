import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Main from "./pages/Main"
import Footer from "./pages/Footer"
import NavbarHeader from './components/styled/Navbar';
import HomeStyle from "./components/styled/Home";




function App() {
 

  return (
    <>
    <NavbarHeader>
    <Navbar />
    </NavbarHeader>
    <HomeStyle>
    <Home/>
    </HomeStyle>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
