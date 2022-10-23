import React from 'react';
import { ServiceSectionContainer } from '../Styles/ServiceSectionStyles';
import {
	TypographyHeading,
	TypographyMainText,
} from '../Styles/TrustedCompaniesSectionStyles';
import ContainerServiceComponent from '../components/ContainerServiceComponent';
import { serviceData } from '../constants/Constants';
import { FormattedMessage } from 'react-intl';

const ServiceSection = () => {
	return (
		<ServiceSectionContainer>
			<TypographyHeading>
				<FormattedMessage id="services-we-provide" />
			</TypographyHeading>
			<TypographyMainText>
				<FormattedMessage id="services-we-provide-second-text" />
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
