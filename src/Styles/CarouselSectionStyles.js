import styled from 'styled-components';
import Graphics from '../images/Graphics.png';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CarouselSectionContainer = styled.div`
	background-color: #141b2a;
	background-image: url(${Graphics});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0 auto;
	padding: 20px;
	@media (min-width: 1024px) {
		padding: 20px 5vw;
	}
	@media (min-width: 1440px) {
		padding: 20px 18vw;
	}
`;

export const SwiperContainer = styled(Swiper)`
  &.swiper{
    height: 600px;
    .swiper-slide{
      display: flex;
      flex-flow: column;
      justify-content: space-evenly;
    }
    //.swiper-button-prev {
    //  left: 63% !important;
    //  top: 40% !important;
    //  transform-origin: left center;
    //}
    //.swiper-button-next {
    //  left: 63% !important;
    //  bottom: 49% !important;
    //  transform-origin: left center;
    }
  }
`;

export const Img = styled.img`
	margin: 0 auto;
	width: 100%;
	@media (min-width: 1024px) {
		height: 289px;
		width: 500px;
	}
`;

export const ContainerWrapperData = styled.div`
	box-sizing: border-box;
	padding: 20px;

	background: #151d2f;
	/* White */

	border: 1px solid #ffffff;
	border-radius: 8px;
`;

export const SwiperHeadingMob = styled.p`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	/* identical to box height, or 138% */

	/* White */

	color: #ffffff;
`;

export const DataWrapper = styled.div`
	display: flex;
`;

export const DataWrapperItem = styled.div``;
export const DataWrapperItemHeading = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: #e5e7eb;
`;
export const DataWrapperItemText = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 18px;
	color: #e5e7eb;
`;

export const SwiperHeading = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 1.6rem;
	line-height: 40px;
	/* identical to box height, or 143% */
	text-align: center;
	/* White */
	color: #ffffff;
`;
