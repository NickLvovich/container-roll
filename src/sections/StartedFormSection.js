import React from 'react';
import FormComponent from '../components/FormComponent';
import { StartedFormWrapper } from '../Styles/StartedFormSectionStyles';
import {
	TrustedHeadingTypography,
	TrustedTypography,
} from '../Styles/TrustedCompaniesSectionStyles';
import { FormattedMessage } from 'react-intl';

const StartedFormSection = () => {

	return (
		<StartedFormWrapper>
			<div>
				<TrustedHeadingTypography>
					<FormattedMessage id="get-started-form" />
				</TrustedHeadingTypography>
				<TrustedTypography>
					<FormattedMessage id="form-text" />
				</TrustedTypography>
			</div>
			<FormComponent/>
		</StartedFormWrapper>
	);
};

export default StartedFormSection;
