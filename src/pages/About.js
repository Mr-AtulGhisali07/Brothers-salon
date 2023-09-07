import React from "react";
import clasess from "./About.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Appointment from "../Components/Container/Appointment";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"brothers-salon - About us"}</title>
      </Helmet>
      <section id={clasess.main_about}>
        <div className={clasess.image_about}>
          <img
            src="/Images/about-bg.jpg"
            alt="about-bg"
            data-aos="zoom-out"
          ></img>
        </div>
        <div id={clasess.container} className="container-fluid">
          <div className={clasess.about_paraghrap}>
            <h3 className={clasess.heading}>OUR STORY</h3>
            <p className={clasess.para}>
              {" "}
              Brother's Salon is one of the most powerful and fastest growing
              salon chain brand PanIndia, that has given the hairstyling
              industry a new horizon. Emerging as the largest single salon chain
              in the country.
            </p>
            <h4 className={clasess.heading}> Founder of Brother's Salon</h4>
            <div className={clasess.founder_img}>
              <img src="/Images/founder2.jpg" alt="about img"></img>
            </div>
            <h4 className={clasess.heading}>History of the Company</h4>
            <p>
              Brother's Salon was established in January,1989 and has
              consistently shown year on year growth and is now a chain of 162
              branchesPanIndia. Brother's Salon is on a growth path of 200
              salons; currently employing over 6000 employees across India.
              Brother's Salon has remained a pioneer in hair, beauty & nail
              services and is now setting new bench marks in make up exceeding
              all industry standards to give professionalism a new art form.
            </p>
            <p>
              Mr.RoY, Onwer of the Brother's Salon chain is also the visionary
              behind the inception of the company 33 years ago. He is the man
              behind growth and expansion of the company. Mr.RoY while working
              on the design and interiors for the salon keeps in mind “Utmost
              Luxury at Affordable Prices” to ensure the customers get the
              maximum and beyond expectations. Mr.RoY says “I started the salon
              chain from a small 3 cutting station barber shop and guided the
              company through the stages - from Barber shop to Beauty Parlour to
              unisex salons and now 162 salons PanIndia”.
            </p>
          </div>
        </div>
        <Appointment />
      </section>
    </>
  );
};
export default About;
