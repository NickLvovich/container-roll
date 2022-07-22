import React from 'react';
import {
	PrimaryButton,
	MainHeadingSecondContainer,
	TypographySellingHeading,
	TypographySellingHeadingAddition,
	ButtonWrapper,
} from '../Styles/MainHeadingInfoComponentStyles';

const MainHeadingSellingComponent = ({ screenType }) => {
	return (
		<MainHeadingSecondContainer>
			<TypographySellingHeading>
				{screenType === 'selling'
					? 'Buy or sell a containers on favorable terms'
					: 'Take a container into leeasing'}
			</TypographySellingHeading>
			<TypographySellingHeadingAddition>
				A ship is a large watercraft that travels the world's oceans and other
				sufficiently deep
			</TypographySellingHeadingAddition>
			<ButtonWrapper>
				<PrimaryButton>Get started!</PrimaryButton>
				{screenType === 'selling' && <PrimaryButton white>Sell</PrimaryButton>}
			</ButtonWrapper>
		</MainHeadingSecondContainer>
	);
};
export default MainHeadingSellingComponent;
