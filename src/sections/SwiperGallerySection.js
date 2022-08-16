import {SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import {Img, SwiperContainer} from "../Styles/SwiperGalleryStyles";
import ship from '../images/container-marine.jpeg'
import 'swiper/css';
import 'swiper/css/effect-fade';

import React from 'react';

const SwiperGallerySection = ({first, reverseDirection}) => {
  return (
    <SwiperContainer
      first={first}
      spaceBetween={50}
      slidesPerView={4}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: reverseDirection
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><Img src={ship} alt="container"/></SwiperSlide>
      <SwiperSlide><Img src={ship} alt="container"/></SwiperSlide>
      <SwiperSlide><Img src={ship} alt="container"/></SwiperSlide>
      <SwiperSlide><Img src={ship} alt="container"/></SwiperSlide>
      <SwiperSlide><Img src={ship} alt="container"/></SwiperSlide>
    </SwiperContainer>
  );
};

export default SwiperGallerySection;
