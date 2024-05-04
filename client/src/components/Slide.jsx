import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/lazy";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, EffectCoverflow, Lazy, Pagination } from "swiper";
import images from "../assets/slideImages";

export default function Slide() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        spaceBetween={90}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        lazy={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -0.1,
          depth: 100,
          modifier: 2.8,
          slideShadows:false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, Lazy]}
        className="mySwiper w-full px-2 pt-2 pb-10 md:pt-5 "
      >
        {images.map((i, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full bg-cover  bg-center md:w-96 lg:w-[640px] "
          >
            <Link to="/">
              <img
                src={i}
                className="swiper-lazy h-40  w-full rounded-lg drop-shadow-xl md:h-56 lg:h-80	"
              />
            </Link>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
