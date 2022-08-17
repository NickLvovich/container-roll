module.exports = {
	siteMetadata: {
		title: `СontaineRRoll`,
		siteUrl: `https://www.yourdomain.tld`,
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
		{
			resolve: 'gatsby-plugin-favicons',
			options: {
				logo: './src/images/favLogo.png',
				appName: 'СontaineRRoll',
				background: '#000',
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					yandex: false,
					windows: false
				}
			}
		},
	],
};
