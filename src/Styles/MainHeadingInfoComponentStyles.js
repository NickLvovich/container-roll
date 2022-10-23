import styled from 'styled-components';
import Button from '@mui/material/Button';
import {AnchorLink} from "gatsby-plugin-anchor-links";

export const AnchorLinkStyled = styled(AnchorLink)`
  text-decoration: none;
  grid-area: ${(props) => (props.ServiceButton ? 'ServiceButton' : null)};
`
export const MainHeadingContainer = styled.nav`
	display: grid;
	padding: 24px;
	align-items: center;
	@media (min-width: 768px) {
		padding: 54px;
		align-items: center;
		flex-flow: column;
		justify-content: center;
		display: flex;
		align-content: center;
	}
`;
export const TypographyHeading = styled.h1`
	font-size: 1.6rem;
	font-weight: 700;
	text-align: left;
	color: #ffff;
	line-height: 34px;
	@media (min-width: 768px) {
		text-align: center;
		font-size: 2.8rem;
		line-height: 50px;
	}
	@media (min-width: 1024px) {
		font-size: 4rem;
		line-height: 74px;
	}
`;
export const TypographyHeadingAddition = styled.h3`
	font-size: 1.2rem;
	font-weight: 200;
	line-height: 22px;
	text-align: left;
	color: #e5e7eb;
	@media (min-width: 768px) {
		text-align: center;
		font-size: 1.4rem;
	}
	@media (min-width: 1024px) {
		font-size: 1.8rem;
		line-height: 40px;
	}
`;

export const PrimaryButton = styled(Button)`
	&.MuiButton-root {
		margin-top: 24px;
		width: 100%;
		background-color: ${(props) => (props.white ? '#ffff' : '#3f65ea')};
		height: 52px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		color: ${(props) => (props.white ? '#3f65ea' : '#ffff')};
		border-radius: 8px;
		text-transform: capitalize;
		font-style: normal;
		font-weight: 700;
		font-size: 17px;
		@media (min-width: 768px) {
			max-width: 200px;
			align-self: center;
			padding: 0 40px;
		}
		@media (min-width: 1024px) {
			margin-left: ${(props) => (props.white ? '15px' : '0')};
		}
		&:hover {
			background: #1e3ca9;
      color:  ${(props) => (props.white ? '#ffff' : '#ffff')};
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		}
	}
`;

export const MainHeadingSecondContainer = styled.div`
	display: grid;
	padding: 24px;
	align-items: center;
	@media (min-width: 768px) {
		padding: 54px 44vw 54px 54px;
		align-items: center;
		flex-flow: column;
		justify-content: center;
		display: flex;
		align-content: center;
	}
`;

export const TypographySellingHeading = styled.h1`
	font-size: 1.6rem;
	font-weight: 700;
	text-align: left;
	color: #ffff;
	line-height: 34px;
	@media (min-width: 768px) {
		text-align: left;
		font-size: 2.8rem;
		line-height: 50px;
	}
	@media (min-width: 1024px) {
		font-size: 4rem;
		line-height: 74px;
	}
`;

export const TypographySellingHeadingAddition = styled.h3`
	font-size: 1.2rem;
	font-weight: 200;
	line-height: 22px;
	text-align: left;
	color: #e5e7eb;
	@media (min-width: 768px) {
		text-align: left;
		font-size: 1.4rem;
	}
	@media (min-width: 1024px) {
		font-size: 1.8rem;
		line-height: 40px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: space-around;
	align-items: center;
	width: 100%;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;
