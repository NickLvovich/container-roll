import styled from 'styled-components';

export const HowItWorksContainer = styled.div`
	margin: 0 auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1024px) {
		padding: 20px 5vw;
		flex-direction: column;
	}
	@media (min-width: 1440px) {
		padding: 20px 18vw;
	}
`;

export const HowItWorksHeading = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #1c1e23;
`;

export const WorkSectionComponentWrapper = styled.div`
	display: flex;
	flex-flow: column;
	@media (min-width: 1024px) {
		flex-direction: row;
		width: 100%;
		justify-content: space-evenly;
	}
	@media (min-width: 1440px) {
	}
`;

export const WorkSectionBlock = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 16px;
	gap: 8px;
	width: 280px;
	height: 202px;
	background: #f9fbfd;
	border: 1px solid #edeff2;
	box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.05);
	border-radius: 12px;
	margin-top: 15px;
	@media (min-width: 768px) {
		width: 380px;
		height: 202px;
	}
	@media (min-width: 1024px) {
		width: 280px;
		height: 202px;
	}
	@media (min-width: 1440px) {
	}
`;

export const WorkSectionBlockImg = styled.img`
	height: 42px;
	width: 42px;
`;

export const WorkSectionHeading = styled.h4`
	margin: 0;
`;

export const WorkSectionText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	color: #4b4c4e;
`;
