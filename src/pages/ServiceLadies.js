import clasess from "./ServiceLadies.module.css";
import Appointment from "../Components/Container/Appointment";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import BrandPage from "../Components/Container/BrandPage";

const ServiceLadies = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const list_1 = [
    {
      Title: "Hair Styling",
      List: [
        "Hair Cut",
        "Global Colouring",
        "Blow Dry",
        "Root Touch Up",
        "Shampoo & Conditioning",
        "Roller Setting ",
      ],
    },
    {
      Title: "Make Up",
      List: [
        "Party Make Up",
        "Engagement Make Up",
        " Bridal Make Up",
        "Base Make Up",
        "Eye Make Up",
        "Body Make up",
      ],
    },
    {
      Title: "Hair Texture",
      List: [
        "Rebonding",
        "Perming",
        "Keratin",
        "Colour Protection",
        "Smoothening",
      ],
    },
    {
      Title: "Hair Treatments",
      List: [
        "Spa Treatments",
        "Volumizing",
        " Hair Moisturising",
        "Scalp Treatments",
        "Oiling Treatments",
      ],
    },
  ];

  const list_2 = [
    {
      Title: "Facial & Rituals",
      List: [
        "Bleach",
        " Luxury Facial",
        " Body Polishing",
        "Threading",
        "Hand Bleach",
      ],
    },
    {
      Title: "Hand & Feet",
      List: [" Manicure", "Spa Pedicure", "Pedicure", "Waxing", "Spa Manicure"],
    },
    {
      Title: "Nail Care",
      List: [
        " Nail Paint",
        " Nail verient",
        "Nail Art",
        "Nail Filling",
        "Nail Clining",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {"brothers-salon - Top Ladies Service |Best Salon for Womens"}
        </title>
      </Helmet>
      <section id={clasess.section}>
        <p className={clasess.heading}>
          <HashLink to="/gents#" className={clasess.ladies_gents_heading}>
            {" "}
            go to gents services{" "}
          </HashLink>
        </p>
        <div className={clasess.services_Img}>
          <img src="/Images/serviceLadies-bg1.png" alt="serviceLadies-bg1" />
        </div>
        <div className="container-fluid  bg-light">
          <div className="container">
            <div className="row bg-light">
              {list_1.map((item, index) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-up"
                  key={index}
                >
                  <h6 className={clasess.service_heading}>{item.Title}</h6>
                  <ul className={clasess.service_list}>
                    <div>
                      {" "}
                      {item.List.map((i) => (
                        <li>{i}</li>
                      ))}{" "}
                    </div>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={clasess.services_Img}>
          <img src="/Images/serviceLadies-bg2.png" alt="serviceLadies-bg2" />
        </div>
        <div className="container-fluid bg-light">
          <div className="container bg-light ">
            <div className="row bg-light">
              {list_2.map((item, index) => (
                <div className="col-sm-4" data-aos="fade-up" key={index}>
                  <h6 className={clasess.service_heading}>{item.Title}</h6>
                  <ul className={clasess.service_list}>
                    <div>
                      {" "}
                      {item.List.map((i) => (
                        <li>{i}</li>
                      ))}
                    </div>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className={clasess.heading2}>
          <HashLink to="/gents#" className={clasess.ladies_gents_heading2}>
            {" "}
            <button> Gents Services </button>{" "}
          </HashLink>
        </p>
        <Appointment />
        <div id={clasess.paraghaph} className="container-fluid bg-light">
          <div className="container">
            <h3 data-aos="fade-up">Ladies Salon Services</h3>
            <p>
              Explore the art of looking your best beautiful with the best in
              the industry. Brother's Salon makes a personal commitment to
              realize the prevalent gap in the industry by providing access to
              high-end ladies salon services, that to at convenient times and
              affordable prices - any day of the week and any time of the day!
              You can count on us for a hassle-free appointment.{" "}
            </p>
            <p>
              Brother's Salon is an Award-winning Salon Chain which has over 90
              branches across India and Dubai. We are also one of the largest
              and fastest-growing Salon Chains in India. We have been at the
              forefront of setting new benchmarks and exceeding Industry
              standards.
            </p>
            <p>
              When you avail our services, we ensure that you are completely
              delighted with your style. Before our team of experienced,
              professional, and affable stylists works its magic, they'll go
              through a thorough consultation to understand your preferences and
              style goals. We don't start till we are clear of what you want.
            </p>
            <p>
              At Brother's Salon, our stylists have been rigorously trained to
              give you a unique and personalized experience. Our creative hair
              stylists and beauty experts work meticulously to give you a head
              turning look. Be it a haircut focused on highlighting your best
              features or a hair color that would make you stand out and shine,
              we work wholeheartedly towards meeting your requirements and
              enhancing your look.
            </p>
            <p>
              With a keen eye for detail, Brother's Salon offers you varied
              options to provide proper care to your body, hair and skin. With
              our excellent range of Hair styling, Make Up, Hair Texture, Hair
              treatments, Facials, Hand and feet, Nail care services, we assure
              you the 'Superfect' dreamy look. Whether it's overseeing client
              satisfaction for everyone who enters the salon or the magnificent
              interior that catches every onlookers fancy, Brother's Salon
              possesses an infinite enthusiasm for keeping abreast with latest
              technologies and trends.
            </p>
            <p>
              Visit us for all your beauty needs. You can also book an
              appointment by either filling the form on our website or by simply
              giving us a call. Book now for the best in class services!
            </p>
          </div>
        </div>
        <BrandPage/>
      </section>
    </>
  );
};
export default ServiceLadies;
