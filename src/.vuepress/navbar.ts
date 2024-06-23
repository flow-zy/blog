import { navbar } from 'vuepress-theme-hope';

export default navbar([
	{
		link: '/',
		text: '首页',
		icon: 'home',
	},
	{
		text: '网页入门',
		icon: 'website',
		children: [
			{
				text: 'html',
				icon: 'html',
				link: '/html/',
				activeMatch: '^/html/$',
			},
			{
				text: 'css',
				icon: 'css',
				link: '/css/',
				activeMatch: '^/css/$',
			},
			{
				text: 'js',
				icon: 'js',
				link: '/js/',
				activeMatch: '^/js/$',
			},
			{
				text: 'jquery',
				icon: 'jQuery',
				link: '/jquery/',
				activeMatch: '^/jquery/$',
			},
		],
	},
	{
		text: '框架',
		icon: 'frame',
		link: '/frame/',
		children: [
			{
				text: 'VUE',
				icon: 'vue',
				link: '/frame/vue/',
				activeMatch: '^/frame/vue/$',
			},
			{
				text: 'React',
				icon: 'react',
				link: '/frame/react/',
				activeMatch: '^/frame/react/$',
			},
		],
	},
	{
		text: 'TypeScript',
		icon: 'typescript',
		link: '/typescript/',
		activeMatch: '^/typescript/$',
	},
	{
		text: '小程序',
		icon: 'mini-app',
		link: '/mini-app/',
		activeMatch: '^/mini-app/$',
	},
	{
		text: 'uniapp',
		icon: 'uniapp',
		link: '/uniapp/',
		activeMatch: '^/uniapp/$',
	},
	{
		text: '构建工具',
		icon: 'packing',
		link: '/pack/',
		activeMatch: '^/pack/$',
	},
]);
