import clasess from "./AndpersandShoot.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

function BridalCollection() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {
            "brothers-salon - Top Salon for Bridal Makeup, Best Bridal Hair and Makeup-collection"
          }
        </title>
      </Helmet>
      <section className={clasess.main_section}>
        <div className="container">
          <h3>BRIDAL COLLECTION</h3>
          <ul className={clasess.grid} data-aos="fade-up">
            <li className={clasess.li}>
              <img
                src="/Images/bridal-1.jpg"
                alt="bridal-1"
                data-aos="fade-up"
              />
              <img
                src="/Images/bridal-2.jpg"
                alt="bridal-2"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/bridal-3.jpg"
                alt="bridal-3"
                data-aos="fade-up"
              />
              <img
                src="/Images/bridal-4.jpg"
                alt="bridal-4"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/bridal-6.jpg"
                alt="bridal-5"
                data-aos="fade-up"
              />
              <img
                src="/Images/bridal-5.jpg"
                alt="bridal-6"
                data-aos="fade-up"
              />
            </li>
          </ul>
          <div className={clasess.goBack_btn}>
            <HashLink to="/collection#" className={clasess.goBack_link_btn}>
              {"<<< back"}
            </HashLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default BridalCollection;
