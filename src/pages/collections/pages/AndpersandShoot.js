import clasess from "./AndpersandShoot.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import BrandPage from "../../../Components/Container/BrandPage";

function AndpersandShoot() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"brothers-salon -Professional Hairstyles for men"}</title>
      </Helmet>
      <section className={clasess.main_section}>
        <div className="container">
          <h3>ANDPERSAND SHOOT</h3>
          <ul className={clasess.grid}>
            <li className={clasess.li}>
              <img
                src="/Images/AndpersandShoot-1.jpg"
                alt="AndpersandShoot-1"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/AndpersandShoot-2.jpg"
                alt="AndpersandShoot-2"
                data-aos="fade-up"
              />
              <img
                src="/Images/AndpersandShoot-3.jpg"
                alt="AndpersandShoot-3"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/AndpersandShoot-4.jpg"
                alt="AndpersandShoot-4"
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
        <BrandPage/>
      </section>
    </>
  );
}
export default AndpersandShoot;
