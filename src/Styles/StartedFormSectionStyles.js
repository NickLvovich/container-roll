import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import { Button } from '@material-ui/core';
import BG from '../images/FormBg-small.svg';
import { TextField, Select } from 'mui-rff';

export const StartedFormWrapper = styled.div`
	background: no-repeat url(${BG});
	background-size: cover;
	padding: 80px 20px 0 20px;
	margin-top: 400px;
	@media (min-width: 1024px) {
		padding: 200px 30vw 0 30vw;
		margin-top: 100px;
	}
	@media (min-width: 1440px) {
		margin-top: 50px;
		padding: 200px 35vw 0 35vw;
	}
	@media (min-width: 2560px) {
		margin-top: 50px;
		padding: 200px 40vw 0 40vw;
	}
`;

export const PhoneInputStyled = styled(PhoneInput)`
	/* Form Fields/Text input */
	height: 52px;
	background: #ffffff;
	border-radius: 8px;
	.form-control {
		height: 52px !important;
		width: 100% !important;
		border-radius: 8px;
		border: 1px solid #ffffff !important;
	}
	.flag-dropdown {
		background-color: #ffff !important;
		border-radius: 8px 0 0 8px !important;
		border: 1px solid #ffffff !important;
		.selected-flag {
			border-radius: 8px 0 0 8px !important;
		}
	}
`;

export const FieldWrapper = styled.div`
	margin-top: 45px;
`;

export const ResetButton = styled(Button)`
	height: 52px;
	margin-top: 40px !important;
	color: black !important;
	background-color: #ffff !important;
`;

export const SendButton = styled(Button)`
	.MuiButtonBase-root {
	}
	margin-top: 40px !important;
	background: #3f65ea;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 8px;
	height: 52px;
`;

export const TextFieldForm = styled(TextField)``;
