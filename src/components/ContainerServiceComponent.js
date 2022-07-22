import React from 'react';
import {
	Baige,
	ImageService,
	ServiceBlock,
	ServiceButton,
	TypographyHeadingService,
} from '../Styles/ContainerServiceStyles';
import { TypographyMainText } from '../Styles/TrustedCompaniesSectionStyles';

const ContainerServiceComponent = ({ serviceData }) => {
	return (
		<ServiceBlock>
			<ImageService src={serviceData.img} alt={serviceData.alt} />
			<Baige>{serviceData.baige}</Baige>
			<TypographyHeadingService>{serviceData.heading}</TypographyHeadingService>
			<TypographyMainText>{serviceData.text}</TypographyMainText>
			<ServiceButton>Learn more</ServiceButton>
		</ServiceBlock>
	);
};

export default ContainerServiceComponent;
