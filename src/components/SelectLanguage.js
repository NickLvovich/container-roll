import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby';
import {
	DropdownMenuStyles,
	MenuItemStyled,
	SelectOptions,
	TypographyTranslate,
} from '../Styles/NavigationComponentStyles';
import { languages } from '../constants/Constants';

export default function BasicLanguageSelect() {
	const [language, setLanguage] = useState('en');
	const path = typeof window !== 'undefined' ? window.location.pathname : '';
	const pathArray = path.split('/');
	const supportedLanguages = languages.map(lang => lang.code);
	const currentLanguage = () => {
		if (supportedLanguages.includes(pathArray[1])) {
			return pathArray[1];
		} else {
			return 'en';
		}
	};

	const handleChange = (event) => {
		setLanguage(event.target.value);
	};
	// in future we will move to current language page
	const setTranslate = (lang) => {
		if (lang === 'en') {
			return '/';
		}
		console.log(lang, 'lang')

		return `/${lang}`;
	}
	const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(width: 22, height: 22, layout: FIXED)
            }
          }
        }
      }
    }
  `);
	const images = data.allFile.edges.reduce((acc, { node }) => {
		acc[node.name] = node?.childImageSharp?.gatsbyImageData;
		return acc;
	}, {});
	return (
		<>
			<DropdownMenuStyles />
			<FormControl>
				<SelectOptions
					defaultValue={language}
					value={currentLanguage()}
					onChange={handleChange}
					MenuProps={{
						className: 'custom-dropdown-menu',
					}}
				>
					{languages.map((lang) => (
						<MenuItemStyled
							ey={lang.code}
							value={lang.code}
							component="a"
							href={`${setTranslate(lang.code)}`}
						>
							<GatsbyImage
								image={getImage(images[lang.flag])}
								alt={`translate-${lang.code}`}
								style={{ marginRight: 10, borderRadius: '50%' }}
							/>
							<TypographyTranslate>{lang.label}</TypographyTranslate>
						</MenuItemStyled>
					))}
				</SelectOptions>
			</FormControl>
		</>

	);
}