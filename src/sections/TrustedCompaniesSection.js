import React from 'react';
import {
	PartnersBlock,
	TrustedContainer,
	TypographyHeading,
	TypographyMainText,
	TypographyWrapper,
} from '../Styles/TrustedCompaniesSectionStyles';
import { companies } from '../constants/Constants';
import RenderImages from '../components/RenderImages';
import { FormattedMessage } from 'react-intl';

function TrustedCompaniesSection() {
	return (
		<TrustedContainer>
			<TypographyWrapper>
				<TypographyHeading>
					<FormattedMessage id="trusted-companies" />
				</TypographyHeading>
				<TypographyMainText>
					<FormattedMessage id="trusted-companies-second-text" />
				</TypographyMainText>
			</TypographyWrapper>
			<PartnersBlock>
				<RenderImages imgArr={companies} />
			</PartnersBlock>
		</TrustedContainer>
	);
}

export default TrustedCompaniesSection;
