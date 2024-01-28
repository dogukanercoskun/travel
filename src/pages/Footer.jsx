import video from "../assets/video.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


function Footer() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>İletişimde Kalalım</small>
            <h2>Bizimle Tatile Çıkın</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos='fade-up' type="email" placeholder="Emailinizi Giriniz" />
            <button data-aos='fade-up' className="btn flex" type="subbmit">
              Gönder <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Seyahat.
              </a>
            </div>

            <div data-aos='fade-up' className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              iure unde asperiores maxime nulla. Vitae non eum voluptas
              architecto quis, deserunt veniam dignissimos, aperiam voluptatibus
              maiores rerum esse nisi similique.
            </div>

            <div data-aos='fade-up' className="footerSocials flex" >
              <FaSquareXTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaFacebook className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">Bizim Ajansımız</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Servisler
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Garanti
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Ajans
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Ödeme
              </li>
            </div>

            <div data-aos='fade-up' data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">Ortaklarımız</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
              Rentcars
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                HotelWord
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
               Trivago
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            
            <div data-aos='fade-up' data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">Son Dakika</span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bodrum Otelleri
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Çeşme Otelleri
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                 Antallya Otelleri
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Şehir Otelleri
              </li>
              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Doğa Otelleri
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
              <small>En İyi Seyahat</small>
              <small>@Copyright Doğukan</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
