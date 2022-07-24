import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../index.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import {
	CarouselSectionContainer,
	ContainerWrapperData,
	DataWrapper,
	DataWrapperItem,
	DataWrapperItemHeading,
	DataWrapperItemText,
	Img,
	SwiperContainer,
	SwiperHeading,
	SwiperHeadingMob,
} from '../Styles/CarouselSectionStyles';
import { containersData } from '../constants/Constants';
import { useWindowWidth } from '../hooks';

export const CarouselSection = () => {
	const width = useWindowWidth();
	return (
		<CarouselSectionContainer>
			<SwiperContainer
				cssMode
				navigation
				pagination
				mousewheel
				keyboard
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				{containersData.map((containerItem) => (
					<SwiperSlide>
						<Img
							src={width > 420 ? containerItem.img : containerItem.imgSmall}
							alt={containerItem.alt}
						/>
						<ContainerWrapperData>
							{width < 420 && (
								<SwiperHeadingMob>{containerItem.baige}</SwiperHeadingMob>
							)}
							<DataWrapper>
								<DataWrapperItem>
									<DataWrapperItemHeading>Volume</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.volume}
									</DataWrapperItemText>
								</DataWrapperItem>
								<DataWrapperItem
									style={{
										marginLeft: 10,
									}}
								>
									<DataWrapperItemHeading>Weight</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.weight}
									</DataWrapperItemText>
								</DataWrapperItem>
							</DataWrapper>
						</ContainerWrapperData>
						{width > 420 && (
							<SwiperHeading>{containerItem.baige}</SwiperHeading>
						)}
					</SwiperSlide>
				))}
			</SwiperContainer>
		</CarouselSectionContainer>
	);
};

export default CarouselSection;
