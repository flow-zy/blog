import { arraySidebar } from 'vuepress-theme-hope';

export default arraySidebar([
	{
		text: 'react',
		icon: 'react',
		children: ['core/started'],
	},
	{
		text: '路由',
		icon: 'react-router',
		prefix: 'router/',
		children: ['core/started'],
	},
	{
		text: '状态管理',
		icon: 'state',
		children: [
			{
				text: 'Redux Toolkit',
				icon: 'reduxToolkit',
				prefix: 'reduxToolkit/',
				children: ['core/started'],
			},
		],
	},
	{
		text: '源码',
		icon: 'source-code',
		prefix: 'resource/',
		children: ['core/started'],
	},
]);
