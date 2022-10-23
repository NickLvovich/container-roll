module.exports = {
	siteMetadata: {
		title: `СontaineRRoll`,
		siteUrl: `https://www.cr.express`,
	},
	plugins: [
		// {
		// 	resolve: 'gatsby-plugin-prettier-eslint',
		// 	options: {
		// 		watch: true, // format/lint on save
		// 		onChangeFullScanLint: false, // if true, on file save always perform full scan lint
		// 		onChangeFullScanFormat: false, // if true, on file save always perform full scan format
		// 		prettierLast: false, // if true, will run Prettier after ESLint
		// 		ignorePatterns: [
		// 			'**/node_modules/**/*',
		// 			'**/.git/**/*',
		// 			'**/dist/**/*',
		// 			'.cache/**/*',
		// 			'public/**/*',
		// 		], // string or array of paths/files/globs to ignore
		// 		prettier: {
		// 			patterns: [
		// 				// the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
		// 				'**/*.{css,scss,less}',
		// 				'**/*.{json,json5}',
		// 				'**/*.{graphql}',
		// 				'**/*.{md,mdx}',
		// 				'**/*.{html}',
		// 				'**/*.{yaml,yml}',
		// 			],
		// 			formatter: 'stylish', // set custom or third party formatter
		// 			maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
		// 			emitWarning: true, // if true, will emit lint warnings
		// 			failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
		// 			failOnWarning: false, // same as failOnError but for warnings
		// 		},
		// 		eslint: {
		// 			patterns: '**/*.{js,jsx,ts,tsx}',
		// 			customOptions: {
		// 				fix: true,
		// 				cache: true,
		// 			},
		// 		},
		// 		icon: 'src/images/icon.png',
		// 	},
		// },
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `СontaineRRoll`,
				short_name: `RR`,
				start_url: `/`,
				icon: `src/images/favLogo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -100
			}
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
	],
};
