import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../index.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import {
	CarouselHeading,
	CarouselHeadingText,
	CarouselSectionContainer,
	ContainerWrapperData,
	DataWrapper,
	DataWrapperItem,
	DataWrapperItemHeading,
	DataWrapperItemText,
	Img,
	SwiperContainer,
	SwiperHeadingMob,
} from '../Styles/CarouselSectionStyles';
import { containersData } from '../constants/Constants';
import { useWindowWidth } from '../hooks';
import { FormattedMessage } from "react-intl";

export const CarouselSection = () => {
	const width = useWindowWidth();
	return (
		<CarouselSectionContainer>
			<CarouselHeading>Providing different sizes of containers</CarouselHeading>
			<CarouselHeadingText>
				<FormattedMessage id="providing-containers" />
			</CarouselHeadingText>
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
							<SwiperHeadingMob>{containerItem.baige}</SwiperHeadingMob>
							<DataWrapper>
								<DataWrapperItem>
									<DataWrapperItemHeading>Volume</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.volume}
									</DataWrapperItemText>
								</DataWrapperItem>
								<DataWrapperItem>
									<DataWrapperItemHeading>Weight</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.weight}
									</DataWrapperItemText>
								</DataWrapperItem>
								<DataWrapperItem>
									<DataWrapperItemHeading>Load</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.load}
									</DataWrapperItemText>
								</DataWrapperItem>
								<DataWrapperItem>
									<DataWrapperItemHeading>
										Inside paramerts
									</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.iHeight}
									</DataWrapperItemText>
									<DataWrapperItemText>
										{containerItem.iWidth}
									</DataWrapperItemText>
									<DataWrapperItemText>
										{containerItem.iLong}
									</DataWrapperItemText>
								</DataWrapperItem>
								<DataWrapperItem>
									<DataWrapperItemHeading>Door size</DataWrapperItemHeading>
									<DataWrapperItemText>
										{containerItem.doorHeight}
									</DataWrapperItemText>
									<DataWrapperItemText>
										{containerItem.doorWidth}
									</DataWrapperItemText>
								</DataWrapperItem>
							</DataWrapper>
						</ContainerWrapperData>
					</SwiperSlide>
				))}
			</SwiperContainer>
		</CarouselSectionContainer>
	);
};

export default CarouselSection;
