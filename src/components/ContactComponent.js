import React from 'react';
import { contactsData } from '../constants/Constants';
import { ContactImg, ContactTextOverlay } from '../Styles/ContactSectionStyles';

const ContactComponent = () => {
	return contactsData.map((contact) => {
		return (
			<ContactTextOverlay>
				<ContactImg src={contact.img} alt={contact.text} />
				{contact.text}
			</ContactTextOverlay>
		);
	});
};

export default ContactComponent;
