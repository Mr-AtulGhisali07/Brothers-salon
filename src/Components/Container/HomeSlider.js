import clasess from "./HomeSlider.module.css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { SliderContent, SliderContent2, SliderContent3 } from "./SliderContent";
import Portfolio from "./Portfolio";
import { Helmet } from "react-helmet";

function HomeSlider() {
  return (
    <section className={clasess.main_swiper} id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"brothers salon | get osm look"}</title>
      </Helmet>
      <div className={clasess.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          Navigation={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <SliderContent />
            <img
              src="./Images/main-continer-bg1.jpg"
              alt="main-continer-bg1"
              style={{ filter: "blur(1px)" }}
              className={clasess.img}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderContent2 />
            <img
              src="./Images/main-continer-bg2.jpg"
              alt="main-continer-bg2"
              className={clasess.img}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderContent3 />
            <img
              src="./Images/main-continer-bg3.jpg"
              alt="main-continer-bg3"
              className={clasess.img}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Portfolio />
    </section>
  );
}
export default HomeSlider;
