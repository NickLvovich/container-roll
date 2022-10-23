import React from 'react';
import NavigationComponent from '../components/NavigationComponent';

import { HeaderContainer } from '../Styles/HeaderSectionStyles';
import MainHeadingSellingComponent from '../components/MainHeadingSellingComponent';

const HeaderSellingSection = ({ screenType, setOpen, open, handleOpen }) => {
	return (
		<HeaderContainer screenType={screenType}>
			<NavigationComponent
				screenType={screenType}
				setOpen={setOpen}
				open={open}
				handleOpen={handleOpen}
			/>
			<MainHeadingSellingComponent screenType={screenType} />
		</HeaderContainer>
	);
};

export default HeaderSellingSection;
