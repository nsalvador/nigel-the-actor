import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
	{
		path: '/',
		component: () => import('./views/Home.vue')
	},
	{
		path: '/on-golden-pond',
		component: () => import('./views/On-Golden-Pond.vue')
	}
];

export default new Router({
	mode: 'history',
	base: process.env.NODE_ENV === 'production' ? 'nigel-the-actor' : '/',
	routes
});
