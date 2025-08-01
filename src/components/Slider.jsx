import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Slider.scss";

import SliderPhoto1 from "../assets/hakkimizda/SliderPhoto1.JPG";
import SliderPhoto2 from "../assets/hakkimizda/SliderPhoto2.jpg";
import SliderPhoto3 from "../assets/hakkimizda/SliderPhoto3.png";
import SliderPhoto4 from "../assets/hakkimizda/SliderPhoto4.jpg";

const sliderİmages = [SliderPhoto1, SliderPhoto2, SliderPhoto3, SliderPhoto4];

function Slider() {
  return (
    <Swiper
      className="slider"
      modules={[EffectFade, Autoplay]}
      effect="fade"
      speed={1000}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
    >
      {sliderİmages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Slider;
