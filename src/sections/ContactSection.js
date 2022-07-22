import React from 'react';
import { contactsData } from '../constants/Constants';
import {
	ContactImg,
	ContactSectionContainer,
	ContactTextOverlay,
	ContactTypography,
	ContactWrapper,
	CopyRightTypography,
} from '../Styles/ContactSectionStyles';
import ContactComponent from '../components/ContactComponent';

const ContactSection = () => {
	return (
		<ContactSectionContainer>
			<ContactWrapper>
				<ContactComponent />
			</ContactWrapper>
			<ContactTypography>
				A ship is a large watercraft that travels the world's oceans and other
				sufficiently deep waterways, carrying cargo or passengers, or in support
				of specialized missions, such as defense, research, and fishing. Ships
				are generally distinguished from boats, based on size, shape, load
				capacity, and purpose. Ships have supported exploration, trade, warfare,
				migration, colonization, imperialism, and science. After the 15th
				century, new crops that had come from and to the Americas via the
				European seafarers significantly contributed to world population
				growth.[1] Ship transport is responsible for the largest portion of
				world commerce.
			</ContactTypography>
			<CopyRightTypography>
				© ContaineRRoll 2022. All rights reserved.
			</CopyRightTypography>
		</ContactSectionContainer>
	);
};

export default ContactSection;
