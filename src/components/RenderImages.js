import React from 'react';
import { Link } from '../Styles/RenderImagesStyles';

function RenderImages({ imgArr }) {
	return imgArr.map((item, key) => {
		return (
			<Link
				style={{
					backgroundColor: item.backgroundColor,
					width: item.width,
					height: item.height,
					padding: item.padding,
					marginLeft: 10
			}}
				key={key} href={item.link}>
				<img
					width={'100%'}
					height={'100%'}
					alt={item.name}
					src={item.img}
				/>
			</Link>
		);
	});
}

export default RenderImages;
