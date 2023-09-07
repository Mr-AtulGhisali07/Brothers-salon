import clasess from "./Footer.module.css";
import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return (
    <section id={clasess.main_footer}>
    <footer className={clasess.container} >
        <div>
            <div className={clasess.footer_img} data-aos="fade-up">
               <img src="./Images/header-footer.png" alt="footer-logo" className={clasess.img_logo}/>
            </div>
            <div className={clasess.grid_1}>
                <p>The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury</p>
            </div>
            <div className={clasess.nav_grid_2}>
            <ul className={clasess.navbar_list}>
                  <li>
                    
                  <HashLink className={clasess.navbar_link}  to="/#"> HOME</HashLink>
                  </li>
                  <li>
                  <HashLink className={clasess.navbar_link}  to="/about#"> ABOUT </HashLink>
                  </li>
                  <li>
                  <HashLink className={clasess.navbar_link}  to="/gents#"> SERVICES </HashLink>
                  </li>
                  <li>
                  <HashLink className={clasess.navbar_link}  to="/contact#" > CONTACT </HashLink>
                  </li>
                </ul>
            </div>
            <div className={clasess.social_grid_3}>
                <ul className={clasess.icons}>
                <li><a href='#' data-aos="fade-zoom" className={clasess.icon_color} id={clasess.insta_icon}><FaInstagram/></a></li>
                <li><a href='#' data-aos="fade-zoom" className={clasess.icon_color}><FaFacebookF/></a></li>
                <li><a href='#' data-aos="fade-zoom" className={clasess.icon_color} id={clasess.twitter}><FaTwitter/>  </a></li>
                </ul>
            </div>
            <div className={clasess.grid_4}>
               <p> Call us @ <a href='#' style={{textDecoration:"none",color:"white"}}>+91-9876543210 </a></p>
            </div>
            <hr></hr>
            <div className={clasess.footer_bottom}>
                <div>
                  <p>@{new Date().getFullYear()} Brother's Salon. All Right Reserved</p>
                </div>
                <div >
                  <p>Privacy Policy  |  Terms & Conditions</p>
                </div>
            </div>
        </div>
    </footer>
    </section>
  );
};
export default Footer;