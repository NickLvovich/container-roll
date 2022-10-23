import React from 'react';
import {
	Baige,
	ImageService,
	ServiceBlock,
	ServiceButton,
	TypographyHeadingService,
} from '../Styles/ContainerServiceStyles';
import { TypographyMainText } from '../Styles/TrustedCompaniesSectionStyles';
import { FormattedMessage } from 'react-intl';
import { AnchorLinkStyled } from "../Styles/MainHeadingInfoComponentStyles";

const ContainerServiceComponent = ({ serviceData }) => {
	return (
		<ServiceBlock>
			<ImageService src={serviceData.img} alt={serviceData.alt} />
			<Baige>
				<FormattedMessage id={`${serviceData.baige}`} />
			</Baige>
			<TypographyHeadingService>
				<FormattedMessage id={`${serviceData.heading}`} />
			</TypographyHeadingService>
			<TypographyMainText>
				<FormattedMessage id={`${serviceData.text}`} />
			</TypographyMainText>
			<ServiceButton>
				<AnchorLinkStyled to={`#form`} title="move to form">
					<FormattedMessage id="learn-more" />
				</AnchorLinkStyled>
			</ServiceButton>
		</ServiceBlock>
	);
};

export default ContainerServiceComponent;
