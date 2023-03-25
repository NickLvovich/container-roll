import React from 'react';
import {
	WorkSectionBlock,
	WorkSectionBlockImg,
	WorkSectionHeading,
	WorkSectionText,
} from '../Styles/HowItWorksSectionStyles';
import {FormattedMessage} from "react-intl";

const WorkSectionComponent = ({ workSystem }) => {
	return workSystem.map((workItem) => (
		<WorkSectionBlock>
			<WorkSectionBlockImg src={workItem.img} alt="container roll image" />
			<WorkSectionHeading>
				<FormattedMessage id={workItem.heading} />
			</WorkSectionHeading>
			<WorkSectionText>
				<FormattedMessage id={workItem.text} />
			</WorkSectionText>
		</WorkSectionBlock>
	));
};

export default WorkSectionComponent;
