import clasess from "./AndpersandShoot.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

function Collection2023() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {"brothers-salon -Best Hairstyles for Men & Women-collection"}
        </title>
      </Helmet>
      <section className={clasess.main_section}>
        <div className="container">
          <h3>COLLECTION 2023</h3>
          <ul className={clasess.grid}>
            <li className={clasess.li}>
              <img
                src="/Images/collection2023-1.jpg"
                alt="collection2023-1"
                data-aos="fade-up"
              />
              <img
                src="/Images/collection2023-2.jpg"
                alt="collection2023-2"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/collection2023-3.jpg"
                alt="collection2023-3"
                data-aos="fade-up"
              />
              <img
                src="/Images/collection2023-4.jpg"
                alt="collection2023-4"
                data-aos="zoom-in"
              />
              <img
                src="/Images/collection2023-5.jpg"
                alt="collection2023-5"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/collection2023-6.jpg"
                alt="collection2023-6"
                data-aos="fade-up"
              />
              <img
                src="/Images/collection2023-7.jpg"
                alt="collection2023-7"
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
export default Collection2023;
