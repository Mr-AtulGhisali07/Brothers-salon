import React from 'react';
import clasess from "./Services.module.css";
import Appointment from './Appointment';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import SocialPage from './SocialPage';

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return (
    <section id={clasess.main_service}>
      <div className={clasess.heading}><h3>OUR SERVICES</h3></div>
        <div className={clasess.service_imgs}>

          <div className={clasess.img1} >
            <HashLink to="/ladies#"><img src="Images/services-bg1.jpg" alt="services-bg1"  data-aos="fade-right" />
            <span className={clasess.span1}  data-aos="fade-right" >LADIES</span>
            </HashLink>
          </div>
          <div className={clasess.img1} >
            <HashLink to="/gents#"><img src="Images/services-bg2.jpg" alt="services-bg2"  data-aos="fade-left" />
            <span  className={clasess.span2}  data-aos="fade-left" >GENTS </span>
            </HashLink>
          </div>
        </div>
        <Appointment/>
    </section>
  );
};
export default Services;