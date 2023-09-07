import clasess from "./AndpersandShoot.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

function RockNFolk() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {
            "brothers-salon - Top Hairstylists - Rockstar Hairstyles , Haircuts for Ladies & Gents"
          }
        </title>
      </Helmet>
      <section className={clasess.main_section}>
        <div className="container">
          <h3>ROCK N FOLK</h3>
          <ul className={clasess.grid}>
            <li className={clasess.li}>
              <img
                src="/Images/rock-N-folk-1.jpg"
                alt="rock-N-folk-1"
                data-aos="fade-up"
              />
              <img
                src="/Images/rock-N-folk-2.jpg"
                alt="rock-N-folk-2"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/rock-N-folk-3.jpg"
                alt="rock-N-folk-3"
                data-aos="fade-up"
              />
              <img
                src="/Images/rock-N-folk-4.jpg"
                alt="rock-N-folk-4"
                data-aos="fade-up"
              />
            </li>
            <li className={clasess.li}>
              <img
                src="/Images/rock-N-folk-5.jpg"
                alt="rock-N-folk-5"
                data-aos="fade-up"
              />
              <img
                src="/Images/rock-N-folk-6.jpg"
                alt="rock-N-folk-6"
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
export default RockNFolk;
