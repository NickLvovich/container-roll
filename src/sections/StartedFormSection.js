import React, { useState } from 'react';
import FormComponent from '../components/FormComponent';
import { StartedFormWrapper } from '../Styles/StartedFormSectionStyles';
import {
	TrustedHeadingTypography,
	TrustedTypography,
} from '../Styles/TrustedCompaniesSectionStyles';

const StartedFormSection = () => {
	return (
		<StartedFormWrapper>
			<div>
				<TrustedHeadingTypography>Get started!</TrustedHeadingTypography>
				<TrustedTypography>
					Ships are typically larger than boats, but there is no universally
					accepted distinction between the two.
				</TrustedTypography>
			</div>
			<FormComponent />
		</StartedFormWrapper>
	);
};

export default StartedFormSection;
