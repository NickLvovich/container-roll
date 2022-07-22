import styled from 'styled-components';

export const ResultsBlock = styled.div`
	margin: 0 auto;
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 56px 0px;
	max-height: 350px;
	width: 80%;

	background: #252b3f;
	box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.05);
	border-radius: 8px;
	@media (min-width: 768px) {
		flex-direction: row;
		padding: 30px 0px;
	}
`;

export const ResultsTextWrapper = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TypographyResultsHeading = styled.p`
	font-size: 2.5rem;
	margin: 8px;
	font-weight: 700;
	line-height: 40px;
	text-align: left;
	color: #ffff;
`;

export const TypographyResultsAddition = styled.p`
	font-size: 1.1rem;
	margin: 8px;
	font-weight: 400;
	line-height: 22px;
	text-align: left;
	color: #e5e7eb;
`;
