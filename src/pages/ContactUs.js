import clasess from "./ContactUs.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"brothers-salon - contact us"}</title>
      </Helmet>
      <section id={clasess.main_contact}>
        <div>
          <h2 data-aos="fade-zoom">Contact Us</h2>
          <div id={clasess.contact_us} className="container">
            <div className="col-sm-6">
              <h3 className={clasess.h3} data-aos="fade-left">
                Head-Office
              </h3>
              <hr></hr>
              <ul className={clasess.ul}>
                <li>
                  <strong> Academy :</strong> Brother's Academy
                </li>
                <li>
                  <strong> Address :</strong> No7/12,Hinjewadi Pune,Maharashtra
                </li>
                <li>
                  <strong> Phone : </strong> +91-9876543210
                </li>
                <li>
                  <strong> Working :</strong> Sunday to Friday{" "}
                  <strong>|</strong> 9am-9pm
                </li>
                <li>
                  <strong> Email : </strong> brotherssalon@gmail.com
                </li>
                <li>
                  <strong> Website :</strong> www.brother'sSalon.com
                </li>
                <li>
                  <strong> Follow us_</strong> {"  "}{" "}
                  <span className={clasess.icons}>
                    {" "}
                    <FaInstagram /> {"  "} <FaFacebookF /> {"  "} <FaTwitter />
                  </span>
                </li>
              </ul>
            </div>
            {"  "}
            <div className="col-sm-6">
              <h3 className={clasess.h3} data-aos="fade-right">
                Send-Query
              </h3>
              <hr></hr>
              <form
                className={clasess.list}
                action="https://formspree.io/f/mbjvrdwq"
                method="POST"
              >
                <li>
                  {" "}
                  <input
                    type="text"
                    name="user"
                    placeholder="Name"
                    className="form-control"
                    required
                    autoComplete="off"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                    autoComplete="off"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    className="form-control"
                    required
                    autoComplete="off"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <textarea
                    type="textarea"
                    name="Message"
                    cols="20"
                    rows="4"
                    style={{ resize: "none" }}
                    placeholder="Message"
                    className="form-control"
                    required
                    autoComplete="off"
                  ></textarea>{" "}
                </li>
                <div className={clasess.button}>
                  {" "}
                  <button className={clasess.btn} type="submit">
                    Send Query
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
          <div className={clasess.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.06894793978!2d73.86296739999999!3d18.524616450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687775271245!5m2!1sen!2sin"
              width={"100%"}
              height="450"
              style={{ borderRadius: "6px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div id={clasess.bottum_paragraph} className="container">
            <p style={{ fontWeight: "bold" }}>
              Brother's Salon - Largest Salon in India
            </p>
            <p>
              Brother's Salon is an award-winning, elite unisex salon that
              provides a range of makeovers and treatment options for both men
              and women. Why is Brother's Salon the right choice? We have more
              than 95 branches across India and internationally with over 28
              years of experience and thousands of loyal customers, which makes
              us the best and largest salon chain in India and one of the
              leading salon brands internationally. Our salons are easily
              accessible and located in the most happening places of the cities.
              Moreover, the services we provide are handled by award winning
              stylists.
            </p>
            <p>
              Our stylists are always updated with the latest trends and
              techniques to give you the best services with utmost comfort. If
              you're looking for any sort of beauty and hair services and not
              quite sure of your requirement, our experts can really give you
              some awesome recommendations and make sure that you get premium
              services at our salon.
            </p>
            <p>
              Finding us in your city is very easy now. Go to our Salon Finder
              page, enter your city and area, you will find the nearest
              Brother's Salon branch in no time. Moreover, if you've a query
              that you want our experts to resolve, then fill in the form above
              or call us on +91-9876543210 your query will be resolved shortly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
