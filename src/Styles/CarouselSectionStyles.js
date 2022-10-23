import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Graphics from '../images/Graphics.png';

export const CarouselHeading = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 2rem;
	line-height: 48px;
	text-align: center;
	color: #ffffff;
	margin: 10px 0;
`;
export const CarouselHeadingText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 28px;
	text-align: center;
	color: #e5e7eb;
	margin: 10px 0;
`;

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
		padding: 50px 10vw;
	}
`;

export const SwiperContainer = styled(Swiper)`
	&.swiper {
		height: 700px;
		.swiper-slide {
			display: flex;
			flex-flow: column;
			justify-content: space-around;
		}
		.swiper-button-prev,
		.swiper-button-next {
			transform-origin: left center;
			background-color: rgba(255, 255, 255, 0.5);
			border-radius: 50%;
			border: 1px solid #f9fbfd80;
			right: 10px;
			padding: 10px;
			color: #151d2f !important;
			fill: #151d2f !important;
			width: 0.8rem;
			height: 0.8rem;
			stroke: #151d2f !important;
			@media (min-width: 1024px) {
				width: 25px;
				height: 25px;
			}
			@media (min-width: 1440px) {
				width: 25px;
				height: 25px;
			}
			&:after {
				font-size: 1em;
			}
		}
		.swiper-pagination {
			.swiper-pagination-bullet {
				background: #e5e7eb;
				opacity: 0.4;
			}
			.swiper-pagination-bullet-active {
				opacity: 1;
			}
		}
	}
`;

export const Img = styled.img`
	margin: 0 auto;
	width: 100%;
	@media (min-width: 768px) {
		width: 80%;
	}
	@media (min-width: 1024px) {
		height: 289px;
		width: 500px;
	}
	@media (min-width: 1440px) {
		height: 389px;
		width: 700px;
	}
`;

export const SwiperSlideWrapper = styled(SwiperSlide)`
	position: relative;
`;

export const ContainerWrapperData = styled.div`
	box-sizing: border-box;
	padding: 0 10px;
	width: 300px;
	background: #151d2f;
	/* White */

	border: 1px solid #ffffff;
	border-radius: 8px;
	@media (min-width: 1024px) {
		position: absolute;
		top: 25%;
		left: 7%;
		width: 200px;
	}
`;

export const SwiperHeadingMob = styled.p`
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 22px;
	/* identical to box height, or 138% */

	/* White */

	color: #ffffff;
`;

export const DataWrapper = styled.div`
	display: flex;
	border-top: 1px solid #6a6a6a;
	flex-flow: row;
	align-items: baseline;
	justify-content: space-around;
	padding-bottom: 10px;
	@media (min-width: 1024px) {
		flex-flow: column;
	}
`;

export const DataWrapperItem = styled.div`
	margin-top: 10px;
`;
export const DataWrapperItemHeading = styled.p`
	font-style: normal;
	font-weight: 800;
	font-size: 10px;
	line-height: 14px;
	color: #e5e7eb;
	@media (min-width: 1024px) {
		margin: 0;
		font-size: 14px;
	}
`;
export const DataWrapperItemText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 8px;
	line-height: 18px;
	color: #e5e7eb;
	@media (min-width: 1024px) {
		margin: 0;
		font-size: 12px;
	}
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
