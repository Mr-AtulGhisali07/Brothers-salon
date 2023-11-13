import clasess from "./Collection.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BrandPage from "../../Components/Container/BrandPage";

const Collection = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {
            "brothers-salon -Professional Hair Stylists | Top Ladies & Gents Styles | Famous Hair Salon"
          }
        </title>
      </Helmet>
      <section className={clasess.grant_parent}>
        <div className="container">
          <h2>Collections</h2>
          <ul className={clasess.parent_grid}>
            <li className={clasess.li}>
              <Link className={clasess.link} to="/launch-pad">
                {" "}
                <img
                  src="/Images/launchPod.jpg"
                  width="300px"
                  data-aos="fade-zoom"
                />
                <span data-aos="fade-zoom">Launch Pad</span>
              </Link>
              <Link className={clasess.link} to="/collection-2020">
                {" "}
                <img
                  src="/Images/collection2020.jpg"
                  alt="Curly Hairstyle for Men"
                  width="300px"
                  data-aos="fade-zoom"
                />
                <span data-aos="fade-zoom">Collection 2020</span>
              </Link>
            </li>
            <li className={clasess.li}>
              <Link className={clasess.link} to="/rock-n-folk">
                {" "}
                <img
                  src="/Images/rock-n-folk.jpg"
                  alt="rock n folk hairstyle collection"
                  width="300px"
                  data-aos="fade-zoom"
                />
                <span data-aos="fade-zoom">Rock N Folk</span>
              </Link>
              <Link className={clasess.link} to="/bridal">
                {" "}
                <img
                  src="/Images/bridalCollection.jpg"
                  alt="Bridal Makeup Styles Collection - Brother's Salon"
                  width="300px"
                  data-aos="fade-zoom"
                />
                <span data-aos="fade-zoom">Bridal Collection</span>
              </Link>
            </li>
            <li className={clasess.li}>
              <Link className={clasess.link} to="/collection-2023">
                {" "}
                <img
                  src="/Images//collection2023.jpg"
                  alt="Hairstyle Collections - Brother's Salon"
                  width="300px"
                  data-aos="fade-zoom"
                />
                <span data-aos="fade-zoom">Collection 2023</span>
              </Link>
              <Link className={clasess.link} to="/andpersand-shoot">
                {" "}
                <img
                  src="/Images/andpersandShoot.jpg"
                  alt="professional haircuts - Brother's Salon"
                  width="300px"
                  data-aos="fade-zoom"
                />
                <span data-aos="fade-zoom">Andpersand Shoot</span>
              </Link>
            </li>
          </ul>
          <div className={clasess.paraghraph}>
            <h3 data-aos="fade-up"> Hair Style Collection</h3>
            <p>
              Your hairstyle says a lot about your personality. It is the basic
              yet essential way to make your appearance stand out from the
              crowd. However creating a style statement with your hairstyle is a
              task of its own.
            </p>
            <p>
              The often heard statement, "Bad Hair Day" makes you feel less
              confident and want to hide your hair in a stall or a cap. But why
              stop yourself from exploring different hairstyles that would bring
              out the unique personality and even express your thoughts? Over
              the years, Brother's Salon has always been experimenting with the
              latest trends and hairstyles to bring out the best personality of
              the person.
            </p>
            <p>
              To understand what we are saying, head-on to one of our hairstyle
              collections and experience the uniqueness Brother's Salon brings.
              Be it for a simple personality or for the hard rock music lover, a
              corporate look or a bridal look, everything and anything is done
              distinctively. So the next time when you are planning for a
              haircut or a hair color, do not forget your own personality that
              you want to express through your hairstyle and leave the rest to
              us.
            </p>
            <p>
              Brother's Salon has 95+ Branches across India and Abroad. Use the
              Salon<i> Finder to locate</i> the nearest branch or
              <i> Book an appointment </i>now.
            </p>
          </div>
        </div>
        <BrandPage/>
      </section>
    </>
  );
};
export default Collection;
