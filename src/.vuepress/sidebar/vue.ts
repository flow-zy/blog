import { arraySidebar } from 'vuepress-theme-hope';

export default arraySidebar([
	{
		text: 'vue',
		icon: 'vue',
		children: [
			'core/started',
			'core/template',
			'core/reactivity',
			'core/computed',
			'core/classAndStyle',
			'core/conditional',
			'core/list',
			'core/event',
			'core/form',
			'core/lifecycle',
			'core/watch',
			'core/component',
			'core/directives',
			'core/composables',
			'core/slot',
		],
	},
	{
		text: '路由',
		icon: 'vue-router',
		prefix: 'router/',
		children: ['core/started'],
	},
	{
		text: '状态管理',
		icon: 'state',
		children: [
			{
				text: 'pinia',
				icon: 'pinia',
				prefix: 'pinia/',
				children: ['core/started'],
			},
			{
				text: 'vuex',
				icon: 'vuex',
				prefix: 'vuex/',
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
