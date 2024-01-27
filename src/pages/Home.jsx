import video from "../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import Inputs from "../meterials/Inputs";
import { BsCalendar2Date } from "react-icons/bs";
import { IoPricetagSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { FaList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";



function Home() {
  return (
    <>
      <div className="overlay"></div>
      <video
        className="video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      ></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Sizin Seçiminiz Bizim İşimiz</span>
          <h1 className="homeTitle">Tatilinizi Şimdi Arayın</h1>
        </div>

        <div className="cardDiv grid">
          <Inputs
            divClassName="destinationInput"
            htmlForName="city"
            labelText="Gideceğiniz Rotayı Arayın:"
            inputTypeName="text"
            placeHolderText="Yerin Adını Giriniz"
            icon={<GrLocation className="icon" />}
          />

          <Inputs
            divClassName="dateInput"
            htmlForName="date"
            labelText="Tarih Seçiniz:"
            inputTypeName="date"
            placeHolderText="Tarih Seçiniz"
            icon={<BsCalendar2Date className="icon" />}
          />

          <Inputs
            divClassName="priceInput"
            divClassNameTwo="label_total flex"
            icon={<IoPricetagSharp className="icon" />}
          />

          <div className="searchOptions">
          <FaFilter className="icon" />
          <span>DAHA ÇOK FİLİTRELE</span>

          </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
          <TfiFacebook className="icon"/>
          <FaInstagram className="icon"/>
          <SiTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
          <FaList className="icon"/>
          <TbApps lassName="icon" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
