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
					? <FormattedMessage id="buy-sell-containers" />
					: <FormattedMessage id="take-containers-leasing" />}
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
					<PrimaryButton white>
						<FormattedMessage id="sell" />
					</PrimaryButton>
				</AnchorLinkStyled>}
			</ButtonWrapper>
		</MainHeadingSecondContainer>
	);
};
export default MainHeadingSellingComponent;
