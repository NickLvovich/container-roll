import React from 'react';
import { Location } from '@reach/router';
import { getCurrentPageLanguage, getTranslatedPath } from './linkUtils';
import { Link } from "gatsby";

const LinkTranslated = ({ children = [], className = '', href = '/' }) => {
	console.log(href, 'href')
	return (
		<Location>
			{(locationProps) => {
				const { pathname = '' } = locationProps.location;
				console.log(pathname, 'pathname')
				return (
					<Link
						className={className}
						hrefLang={getCurrentPageLanguage(pathname)}
					 	to={getTranslatedPath(pathname, href)}
					>
						{children}
					</Link>
				);
			}}
		</Location>
	);
};

export default LinkTranslated;
