import clasess from "./AndpersandShoot.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

function LaunchPad() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {
            "brothers-salon -Professional Hairdressers | Hairstyles , Haircuts for Ladies & Gents"
          }
        </title>
      </Helmet>
      <section className={clasess.main_section}>
        <div className="container">
          <h3>LAUNCH PAD</h3>
          <ul className={clasess.grid}>
            <li className={clasess.li}>
              <img
                src="/Images/launchPad-1.jpg"
                alt="launchPad-1"
                data-aos="fade-up"
              />
              <img
                src="/Images/launchPad-2.jpg"
                alt="launchPad-2"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/launchPad-4.jpg"
                alt="launchPad-4"
                data-aos="fade-up"
              />
              <img
                src="/Images/launchPad-3.jpg"
                alt="launchPad-3"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/launchPad-5.jpg"
                alt="launchPad-5"
                data-aos="fade-up"
              />
              <img
                src="/Images/launchPad-6.jpg"
                alt="launchPad-6"
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
export default LaunchPad;
