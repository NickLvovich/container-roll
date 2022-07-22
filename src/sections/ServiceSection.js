import React from 'react';
import { ServiceSectionContainer } from '../Styles/ServiceSectionStyles';
import {
	TypographyHeading,
	TypographyMainText,
} from '../Styles/TrustedCompaniesSectionStyles';
import ContainerServiceComponent from '../components/ContainerServiceComponent';
import { serviceData } from '../constants/Constants';

const ServiceSection = () => {
	return (
		<ServiceSectionContainer>
			<TypographyHeading>Services we provide</TypographyHeading>
			<TypographyMainText>
				A ship is a large watercraft that travels the world's oceans and other
				sufficiently deep
			</TypographyMainText>
			{serviceData.map((serviceData, key) => {
				return (
					<ContainerServiceComponent key={key} serviceData={serviceData} />
				);
			})}
		</ServiceSectionContainer>
	);
};

export default ServiceSection;
