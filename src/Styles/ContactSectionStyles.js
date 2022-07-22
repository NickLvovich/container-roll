import styled from 'styled-components';

export const ContactSectionContainer = styled.div`
	background: #141b2a;
	padding: 80px 20px 15px 20px;
	@media (min-width: 1024px) {
		display: flex;
		flex-flow: column;
		align-items: center;
		padding: 20px 5vw;
	}
	@media (min-width: 1440px) {
		padding: 20px 18vw;
	}
	@media (min-width: 2560px) {
		padding: 20px 30vw 0 30vw;
	}
`;

export const ContactImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 10px;
`;

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1024px) {
		align-items: center;
		justify-content: space-around;
		flex-direction: row;
		width: 400px;
	}
`;

export const ContactTextOverlay = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
	font-size: 1rem;
	font-weight: 700;
	line-height: 20px;
	text-align: left;
	color: #ffffff;
`;

export const ContactTypography = styled.p`
	font-size: 0.8rem;
	font-weight: 400;
	line-height: 1.4rem;
	text-align: left;
	color: #9ca3af;
	@media (min-width: 1024px) {
		text-align: center;
	}
`;

export const CopyRightTypography = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
	color: #9ca3af;
`;
