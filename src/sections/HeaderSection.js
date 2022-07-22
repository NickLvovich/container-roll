import React from 'react';
import NavigationComponent from '../components/NavigationComponent';

import { HeaderContainer } from '../Styles/HeaderSectionStyles';
import MainHeadingInfoComponent from '../components/MainHeadingInfoComponent';

const HeaderSection = ({ imgType, setOpen, open, handleOpen }) => {
	return (
		<HeaderContainer imgType={imgType}>
			<NavigationComponent
				setOpen={setOpen}
				open={open}
				handleOpen={handleOpen}
			/>
			<MainHeadingInfoComponent />
		</HeaderContainer>
	);
};

export default HeaderSection;
