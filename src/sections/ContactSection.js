import React from 'react';
import {
	ContactSectionContainer,
	ContactTypography,
	ContactWrapper,
	CopyRightTypography,
} from '../Styles/ContactSectionStyles';
import ContactComponent from '../components/ContactComponent';
import {FormattedMessage} from "react-intl";

const ContactSection = () => {
	return (
		<ContactSectionContainer>
			<ContactWrapper>
				<ContactComponent />
			</ContactWrapper>
			<ContactTypography>
				<FormattedMessage id="about-company" />
			</ContactTypography>
			<CopyRightTypography>
				<FormattedMessage id="reserved-info" />
			</CopyRightTypography>
		</ContactSectionContainer>
	);
};

export default ContactSection;
