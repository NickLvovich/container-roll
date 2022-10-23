import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { ImgGalleryItem, SwiperContainer } from '../Styles/SwiperGalleryStyles';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { containerImagesFirst, containerImagesSecond } from "../Constants";

const SwiperGallerySection = ({first, reverseDirection}) => {
  const chooseImgArr = first ? containerImagesFirst : containerImagesSecond
  return (
    <SwiperContainer
      first={first}
      spaceBetween={50}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
          height: 400
        },
      }}
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
      {chooseImgArr.map(imageItem => <SwiperSlide key={imageItem.key}>
          <ImgGalleryItem key={imageItem.key} src={imageItem.img} alt={`${imageItem.key} container`}/>
        </SwiperSlide>
      )}
    </SwiperContainer>
  );
};

export default SwiperGallerySection;
