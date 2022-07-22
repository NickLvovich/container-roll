import styled from 'styled-components';

export const TrustedContainer = styled.div`
	position: relative;
	padding: 20px;
	display: flex;
	flex-direction: column;
	//justify-content: center;
	//align-items: center;
	@media (min-width: 768px) {
		display: grid;
		grid-template-areas:
			'hd hd'
			'sd sd';
	}
	@media (min-width: 1024px) {
		padding: 20px 5vw;
	}
	@media (min-width: 1440px) {
		padding: 20px 18vw;
	}
`;

export const TypographyWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TypographyHeading = styled.h3`
	align-items: center;
	font-size: 1.4rem;
	@media (min-width: 768px) {
		font-size: 1.8rem;
	}
`;

export const TypographyMainText = styled.p`
	grid-area: TypographyMainText;
	font-size: 1rem;
	font-weight: 400;
	text-align: left;
	color: #4b4c4e;
	line-height: 22px;
	@media (min-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const TypographyQuestionsMainText = styled.p`
	font-size: 1.1rem;
	font-weight: 400;
	text-align: left;
	color: #4b4c4e;
	line-height: 22px;
	@media (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const PartnersBlock = styled.div`
	display: grid;
	grid-template-areas:
		'name name-2'
		'name name-2'
		'name name-2';
	@media (min-width: 768px) {
		grid-template-areas:
			'name name-2 name-3'
			'name name-2 name-3';
	}
`;

export const TrustedHeadingTypography = styled.p`
	color: #ffff;
	font-style: normal;
	font-weight: 800;
	font-size: 1.5rem;
	line-height: 26px;
`;

export const TrustedTypography = styled.p`
	color: #ffff;
	font-style: normal;
	font-size: 1.2rem;
	line-height: 26px;
`;
