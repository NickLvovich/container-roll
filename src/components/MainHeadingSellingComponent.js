import React from 'react';
import {
	PrimaryButton,
	MainHeadingSecondContainer,
	TypographySellingHeading,
	TypographySellingHeadingAddition,
	ButtonWrapper, AnchorLinkStyled,
} from '../Styles/MainHeadingInfoComponentStyles';
import {FormattedMessage} from "react-intl";

const MainHeadingSellingComponent = ({ screenType }) => {
	return (
		<MainHeadingSecondContainer>
			<TypographySellingHeading>
				{screenType === 'selling'
					? 'Buy or sell a containers on favorable terms'
					: 'Take a container into leeasing'}
			</TypographySellingHeading>
			<TypographySellingHeadingAddition>
				{screenType === 'selling'
					? <FormattedMessage id="selling-second-heading" />
					: <FormattedMessage id="leasing-second-heading" />
				}
			</TypographySellingHeadingAddition>
			<ButtonWrapper>
				<AnchorLinkStyled to={`#form`} title="move to form">
					<PrimaryButton>
						<FormattedMessage id="get-started" />
					</PrimaryButton>
				</AnchorLinkStyled>
				{screenType === 'selling' && <AnchorLinkStyled to={`#form`} title="move to form">
					<PrimaryButton white>Sell</PrimaryButton>
				</AnchorLinkStyled>}
			</ButtonWrapper>
		</MainHeadingSecondContainer>
	);
};
export default MainHeadingSellingComponent;
