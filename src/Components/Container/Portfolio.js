import clasess from "./Portfolio.module.css";
import Services from "./Services";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Portfolio = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return (
    <section className={clasess.portfolio}>
      <div className={clasess.grid}>

        <div id={clasess.child1} className={clasess.grid_box}>
        <img  src="/Images/content-bg1.jpg" alt="content-bg1" data-aos="fade-up"/>
        </div>

        <div id={clasess.child2} className={clasess.grid_box}  data-aos="fade-up">
        <img  src="/Images/content-bg2.png" alt="content-bg2"/>
        <span><Link to="/collection" className={clasess.collection}>View Collection</Link></span>
        </div>

        <div id={clasess.child3} className={clasess.grid_box}>
        <img  src="/Images/content-bg7.jpg" alt="content-bg3" data-aos="fade-up"/>
        </div>

        <div id={clasess.child4} className={clasess.grid_box}>
        <img  src="/Images/content-bg4.jpg" alt="content-bg4" data-aos="fade-up"/>
        </div>

        <div id={clasess.child5} className={clasess.grid_box}>
        <img  src="/Images/content-bg5.jpg" alt="content-bg5" data-aos="fade-up"/>
        </div>

        <div id={clasess.child6} className={clasess.grid_box}>
        <img src="/Images/content-bg6.jpg" alt="content-bg6" data-aos="fade-up"/>
        </div>
       </div>
       <Services/>
    </section>
  );
};
export default Portfolio;