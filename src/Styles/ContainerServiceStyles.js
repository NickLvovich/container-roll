import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ServiceBlock = styled.div`
	margin: 15px auto;
	padding: 23px;
	height: 301px;
	top: 124px;

	background: #f9fbfd;
	border: 1px solid #edeff2;
	box-shadow: 0px 3px 6px -2px rgba(0, 0, 0, 0.05);
	border-radius: 12px;
	@media (min-width: 768px) {
		display: grid;
		grid-template-areas:
			'Baige .. ..'
			'TypographyHeadingService .. ..'
			'TypographyMainText ImageService ImageService'
			'ServiceButton .. ..';
	}
`;

export const Baige = styled.span`
	grid-area: Baige;
	width: 78px;
	height: 13px;

	font-style: normal;
	font-weight: 800;
	font-size: 11px;
	line-height: 13px;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	color: #3f65ea;
`;

export const ImageService = styled.img`
	grid-area: ImageService;
	width: 100%;
	height: 64px;
	@media (min-width: 768px) {
		width: 400px;
		height: 100px;
		margin-left: 20px;
	}
	@media (min-width: 1024px) {
		width: 550px;
		height: 150px;
		margin-left: 20px;
	}
`;

export const TypographyHeadingService = styled.h4`
	grid-area: TypographyHeadingService;

	align-items: center;
	font-size: 1.1rem;
`;

export const ServiceButton = styled(Button)`
	grid-area: ServiceButton;
	&.MuiButton-root {
		box-sizing: border-box;

		/* Auto layout */

		display: flex;
		gap: 12px;
		width: 161px;
		height: 40px;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		background: #ffffff;
		border: 1px solid #3f65ea;
		border-radius: 8px;
		text-transform: capitalize;
		&:hover {
			background: #eef2ff;
			/* Light blue */
			border: 1px solid #3f65ea;
			border-radius: 8px;
		}
	}
`;
