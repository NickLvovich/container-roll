import styled from 'styled-components';
import HeaderBG from '../images/HeaderBG.png';
import HeaderBigBg from '../images/headerBigBg.png';
import SellingBG from '../images/SellingBg.png';
import SellingBigBg from '../images/SellingBigBg.png';
import LeasingBG from '../images/LeasingBG.png';
import LeasingBigBg from '../images/LeasingBigBg.png';

const renderImageFunc = (screenType) => {
	switch (screenType) {
		case 'selling':
			return SellingBG;
		case 'leasing':
			return LeasingBG;
		default:
			return HeaderBG;
	}
};

const renderImageDescFunc = (screenType) => {
	switch (screenType) {
		case 'selling':
			return SellingBigBg;
		case 'leasing':
			return LeasingBigBg;
		default:
			return HeaderBigBg;
	}
};

export const HeaderContainer = styled.div`
  transition: 0.8s;
  background-image: url(${(props) => renderImageFunc(props.screenType)});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    background-image: url(${(props) => renderImageDescFunc(props.screenType)});
    transition: 0.8s;
  }
}
`;
