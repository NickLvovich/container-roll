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

function TrustedCompaniesSection() {
	return (
		<TrustedContainer>
			<TypographyWrapper>
				<TypographyHeading>
					Trusted by companies from over 20 countries
				</TypographyHeading>
				<TypographyMainText>
					A ship is a large watercraft that travels the world's oceans and other
					sufficiently deep
				</TypographyMainText>
			</TypographyWrapper>
			<PartnersBlock>
				<RenderImages imgArr={companies} />
			</PartnersBlock>
		</TrustedContainer>
	);
}

export default TrustedCompaniesSection;
