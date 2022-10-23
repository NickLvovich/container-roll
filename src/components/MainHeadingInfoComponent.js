import React from 'react';
import {
	MainHeadingContainer,
	TypographyHeading,
	TypographyHeadingAddition,
	PrimaryButton,
	AnchorLinkStyled,
} from '../Styles/MainHeadingInfoComponentStyles';
import { FormattedMessage } from 'react-intl';

const MainHeadingInfoComponent = () => {
	return (
		<MainHeadingContainer>
			<TypographyHeading>
				<FormattedMessage id="heading-first" />
			</TypographyHeading>
			<TypographyHeadingAddition>
				<FormattedMessage id="heading-second" />
			</TypographyHeadingAddition>
			<AnchorLinkStyled to={`#form`} title="move to form">
				<PrimaryButton>
					<FormattedMessage id="get-started" />
				</PrimaryButton>
			</AnchorLinkStyled>
		</MainHeadingContainer>
	);
};
export default MainHeadingInfoComponent;
