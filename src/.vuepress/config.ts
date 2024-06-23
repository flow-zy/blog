import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
const isProd = process.env.NODE_ENV === 'production';
export default defineUserConfig({
	base: isProd ? '/blog/' : '/',

	lang: 'zh-CN',
	title: 'ZY 学习笔记',
	description: '包括了编程语言的大部分知识',

	theme,

	// 和 PWA 一起启用
	shouldPrefetch: false,
});
