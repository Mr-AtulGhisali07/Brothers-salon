import clasess from "./ServiceGents.module.css";
import Appointment from "../Components/Container/Appointment";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import BrandPage from "../Components/Container/BrandPage";

const ServiceGents = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const list_1 = [
    {
      Title: "Hair Cut & Finish",
      List: [
        "Cut and Hair Care",
        "Shampoo & Conditioning",
        "Head Massage",
        "Beard Styling",
        "Hair/Beard Colouring",
      ],
    },
    {
      Title: "Hair Colour",
      List: [
        "Hair Colour",
        " Hi - Lites",
        "Beard Colour",
        "Special-Colour",
        "Colour-(Ammonia & Ammonia Free)",
      ],
    },
    {
      Title: "Hair Texture",
      List: ["Straightening", "Smoothening", "Rebonding", "Perming Protection"],
    },
    {
      Title: "Hair Treatments",
      List: [
        "Hair Spa",
        "Volumizing",
        " Advanced Moisturising",
        "Scalp Treatments",
        "Colour Protection",
      ],
    },
  ];

  const list_2 = [
    {
      Title: "Skin Care",
      List: [
        "Bleach",
        " Clean Ups",
        "Organic Treatments",
        "Manicure",
        "Pedicure",
      ],
    },
    {
      Title: "Beard Grooming",
      List: [
        " Beard Trim",
        "Beard Colour",
        "Beard Styling",
        "Shave",
        "Beard Spa",
      ],
    },
    {
      Title: "Nail Care",
      List: [
        " Nail Clining",
        " Nail verient",
        "Nail Art",
        "Nail Filling",
        "Nail Paint",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          {"brothers-salon - Top Gents Service | Best Salon for Man"}
        </title>
      </Helmet>
      <section id={clasess.section}>
        <p className={clasess.heading}>
          <HashLink to="/ladies#" className={clasess.ladies_gents_heading}>
            {" "}
            go to Ladies service{" "}
          </HashLink>
        </p>
        <div className={clasess.services_Img}>
          <img src="/Images/serviceGent-bg2.jpg" alt="serviceGent-bg2" />
        </div>
        <div className="container-fluid  bg-light">
          <div className="container" id={clasess.grant_parent}>
            <div className="row bg-light" id={clasess.parent}>
              {list_1.map((item, index) => (
                <div className="col-lg-3 col-sm-6" data-aos="fade-up">
                  <h6 className={clasess.service_heading}>{item.Title}</h6>
                  <ul className={clasess.service_list} key={index}>
                    <div>
                      {" "}
                      {item.List.map((i) => (
                        <li> {i} </li>
                      ))}{" "}
                    </div>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={clasess.services_Img}>
          <img src="/Images/serviceGent-bg1.jpg" alt="serviceGent-bg2" />
        </div>
        <div className="container-fluid bg-light">
          <div className="container bg-light ">
            <div className="row bg-light">
              {list_2.map((item, index) => (
                <div className="col-sm-4" data-aos="fade-up">
                  <h6 className={clasess.service_heading}>{item.Title}</h6>
                  <ul className={clasess.service_list} key={index}>
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
        <p className={clasess.heading2}>
          <HashLink to="/ladies#" className={clasess.ladies_gents_heading2}>
            {" "}
            <button> Ladies Services </button>{" "}
          </HashLink>
        </p>
        <Appointment />
        <div id={clasess.paraghaph} className="container-fluid bg-light">
          <div className="container">
            <p>&nbsp;</p>
            <h3>Gents Salon Services</h3>
            <p>
              Styling has never been limited to women. The art of looking
              handsome and getting makeovers has its own story for men and one
              cannot imagine the number of styles and treatments that can be
              done on these hunks. Moreover, the desire to have a unique
              identity is everyone's' want and Brother's Salon makes that
              possible. From grooming to beauty sessions, we offer a wide range
              of services and treatments that every man wishes to get. Our
              professionally trained stylists and experts leave no stone
              unturned to give you the best look that would do all the talking
              and make your style better than the best!{" "}
            </p>
            <p>
              Not only that, our experts would happily give you tips and tricks
              to sustain that long desired style to make you feel confident and
              rule the world. Brother's Salon is a proud and award winning salon
              chain that has over 95 branches nationally and internationally to
              help people give them the 'Perfect Look' and flaunt it in style.
              Our experts are constantly updated with latest trends in the
              fashion world and even help you suggest the best look according to
              your personality and while we're giving you your desired look, we
              also ensure that you have a very fruitful visit to the salon.
              Bring all your beauty and hair questions to us and get them
              answered at Brother's Salon. We make sure that we are using the
              right product and technology for your services and thus you can be
              sure that you are availing a world-className service.{" "}
            </p>
            <p>
              So wait no more, book your appointment today through our website
              orcontact the nearest Brother's Salon and experience the
              magnificentway of transforming yourself.{" "}
            </p>
          </div>
        </div>
        <BrandPage/>
      </section>
    </>
  );
};
export default ServiceGents;
