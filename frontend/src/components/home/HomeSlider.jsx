import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";

const HomeSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: "5000", disableOnInteraction: false }}
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
    >
      <SwiperSlide>
        <img src={slider1} alt="" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
