import React from 'react';
import { Link } from '../Styles/RenderImagesStyles';

function RenderImages({ imgArr }) {
	return imgArr.map((item, key) => {
		return (
			<Link key={key} href={item.link}>
				<img width={150} height={40.55} alt={item.name} src={item.img} />
			</Link>
		);
	});
}

export default RenderImages;
