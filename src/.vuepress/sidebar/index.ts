import { sidebar } from 'vuepress-theme-hope';
import vue from './vue.js';
import react from './react.js';
import website from './website.js';
export default sidebar({
	'/html': 'structure',
	'/css': 'structure',
	'/js': 'structure',
	'/jquery': 'structure',
	'/typescript/': 'structure',
	'/frame/vue': vue,
	'/frame/react': react,
	'/mini-app': 'structure',
	'/uniapp': 'structure',
	'/': website,
});
