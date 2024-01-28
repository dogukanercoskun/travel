/* eslint-disable no-unused-vars */

import Hotel from '../data/Hotel'
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


function Main() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const data=Hotel;
  return (
    <section className="main contaiber section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Daha çok yer ziyaret edin
        </h3>
      </div>
        <div className="secContent grid">
          {
            data.map(({id,imgSrc,destTitle,location,grade,fees,desciription})=>{
              return(
                <div key={id} data-aos='fade-up' className='singleDestination'>

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                    <CiLocationOn className='icon' />
                    <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}$</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{desciription}</p>
                    </div>
                    <button className='btn flex'>Detaylar <FaClipboardCheck className='icon' /></button>
                  </div>
                </div>
              )

            })

            
          }
        </div>
    
    
    </section>
  )
}

export default Main