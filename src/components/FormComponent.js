import React, { useState, useRef } from 'react';
import { Form } from 'react-final-form';
import { Select } from 'mui-rff';
import { Grid, MenuItem } from '@material-ui/core';
import { containers, UserData } from '../constants/Constants';
import emailjs from '@emailjs/browser';
import {
	PhoneInputStyled,
	FieldWrapper,
	ResetButton,
	SendButton,
	TextFieldForm,
} from '../Styles/StartedFormSectionStyles';
import 'react-phone-input-2/lib/style.css';


const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	}
	return errors;
};

const FormComponent = () => {
	const formRef = useRef();
	const [phoneNumber, setPhoneNumber] = useState();
	const onSubmit = async (values) => {

		emailjs.sendForm(UserData.serviceID, UserData.templateID, formRef.current, UserData.publicKey)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<Form
			onSubmit={onSubmit}
			validate={validate}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<form ref={formRef} onSubmit={handleSubmit} noValidate>
					<div style={{ boxShadow: 'none', background: '#141B2A' }}>
						<Grid alignItems="flex-start" spacing={2}>
							<FieldWrapper>
								<TextFieldForm
									helperText="Place your full name"
									variant="filled"
									label="Name"
									name="name"
									margin="none"
									style={{ background: 'white', borderRadius: 8 }}
									required
								/>
							</FieldWrapper>
							<FieldWrapper>
								<PhoneInputStyled
									onChange={(phone) => setPhoneNumber({ phone })}
									name="phone"
									label="Phone"
									country="gb"
									masks={{ fr: 'xx-xxx-xxx', at: 'xx-xxx-xxx' }}
									isValid={(value, country) => {
										if (value.match(/12345/)) {
											return `Invalid value: ${  value  }, ${  country.name}`;
										} return !value.match(/1234/);
									}}
									inputProps={{
										name: 'phone',
										required: true,
									}}
								/>
							</FieldWrapper>
							<FieldWrapper>
								<TextFieldForm
									helperText="Place your email"
									variant="filled"
									style={{ background: 'white', borderRadius: 8 }}
									type="email"
									label="Email"
									name="email"
									margin="none"
									required
								/>
							</FieldWrapper>
							<FieldWrapper>
								<Select
									style={{ background: 'white', borderRadius: 8 }}
									name="container"
									label="Sell Container"
									formControlProps={{ margin: 'none' }}
									variant="filled"
								>
									{containers.map((option, id) => (
										<MenuItem key={id} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							</FieldWrapper>
							<Grid
								item
								style={{
									display: 'flex',
									flexDirection: 'column',
									marginTop: 16,
								}}
							>
								<ResetButton
									type="button"
									variant="contained"
									onClick={form.reset}
									disabled={submitting || pristine}
								>
									Reset
								</ResetButton>
								<SendButton
									variant="contained"
									color="primary"
									type="submit"
									disabled={submitting}
								>
									Send an application
								</SendButton>
							</Grid>
						</Grid>
					</div>
				</form>
			)}
		/>
	);
};

export default FormComponent;
