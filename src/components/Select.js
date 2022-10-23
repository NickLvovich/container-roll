import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {StaticImage} from "gatsby-plugin-image";
import {
	SelectOptions,
	TypographyTranslate
} from "../Styles/NavigationComponentStyles";
import LinkTranslated from "../LinkTranslated";


export default function BasicSelect({ linkChangeFunction }) {
	const [age, setAge] = React.useState('en');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	console.log(linkChangeFunction(), 'linkChangeFunction')
	console.log(age, 'age')

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<SelectOptions
					value={age}
					onChange={handleChange}
				>
					<LinkTranslated href="/">
						<MenuItem value={'en'}>
							<StaticImage
								style={{ marginRight: 10 }}
								layout="fixed"
								width={22}
								height={22}
								src="../images/eng.png"
								alt="translate-en"
							/>
							<TypographyTranslate>
								En
							</TypographyTranslate>
						</MenuItem>
					</LinkTranslated>
					<LinkTranslated href={`/`}>
						<MenuItem value={'pl'}>
							<StaticImage
								style={{ marginRight: 10, borderRadius: '50%' }}
								layout="fixed"
								width={22}
								height={22}
								src="../images/poland.png"
								alt="translate-en"
							/>
							<TypographyTranslate>
								Pl
							</TypographyTranslate>
						</MenuItem>
					</LinkTranslated>
					<LinkTranslated href={`/`}>
					<MenuItem value={'ua'}>
							<StaticImage
								style={{ marginRight: 10, borderRadius: '50%' }}
								layout="fixed"
								width={22}
								height={22}
								src="../images/ukraine.png"
								alt="translate-en"
							/>
							<TypographyTranslate>
								Ua
							</TypographyTranslate>
						</MenuItem>
					</LinkTranslated>
				</SelectOptions>
			</FormControl>
		</Box>
	);
}
