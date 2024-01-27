import {  useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const[active, setActive]=useState('navBar')

  // eslint-disable-next-line no-unused-vars
  const showNav=()=>{
    //setActive('navBar activeNavbar')
    setActive((prev)=>{
      
     const navBarActive=prev==='navBar'? 'navBar activeNavbar': 'navBar'

        return navBarActive
    })
    
    
   
  }
  
  



  return (
   
    <>
        
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>
                <MdOutlineTravelExplore className="icon" />
                Seyahat
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Ana Sayfa
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Paketler
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Alış-Veriş
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Hakkımızda
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Sayfalar
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Haberler
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  İletişim
                </a>
              </li>
              <button className="btn">Şimdi Rezervasyon Yap</button>
            </ul>
            <div onClick={showNav} className="closeNavbar">
              <IoMdCloseCircle className="icon" />
            </div>
          </div>

       <div onClick={showNav} className="toggleNabar">
        <TbGridDots className="icon"/>
       </div>

        </header>
      </section>
      
    </>
    
    
  );
}

export default Navbar;
