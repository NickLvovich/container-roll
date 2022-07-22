import React from 'react';
import {
	HowItWorksContainer,
	HowItWorksHeading,
	WorkSectionComponentWrapper,
} from '../Styles/HowItWorksSectionStyles';
import { workSystem } from '../constants/Constants';
import WorkSectionComponent from '../components/WorkSectionComponent';

const HowItWorksSection = () => {
	return (
		<HowItWorksContainer>
			<HowItWorksHeading>How it works</HowItWorksHeading>
			<WorkSectionComponentWrapper>
				<WorkSectionComponent workSystem={workSystem} />
			</WorkSectionComponentWrapper>
		</HowItWorksContainer>
	);
};

export default HowItWorksSection;
