module.exports = {
	stories: ['../packages/**/stories/**/*.stories.mdx', '../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-swc',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'storybook-dark-mode',
	],
	framework: '@storybook/react',
	core: {
		builder: {
			name: '@storybook/builder-webpack5',
			options: {
				lazyCompilation: true,
				fsCache: true,
			},
		},
		// 禁用上报
		// disableTelemetry: true
	},
}
