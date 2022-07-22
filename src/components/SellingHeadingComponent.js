import React from 'react';
import {
	MainHeadingContainer,
	TypographyHeading,
	TypographyHeadingAddition,
	PrimaryButton,
} from '../Styles/MainHeadingInfoComponentStyles';

const MainHeadingInfoComponent = () => {
	return (
		<MainHeadingContainer>
			<TypographyHeading>
				20 years providing transport companies with the high-quality containers
			</TypographyHeading>
			<TypographyHeadingAddition>
				A ship is a large watercraft that travels the world's oceans and other
				sufficiently d eep
			</TypographyHeadingAddition>
			<PrimaryButton>Get started!</PrimaryButton>
		</MainHeadingContainer>
	);
};
export default MainHeadingInfoComponent;
