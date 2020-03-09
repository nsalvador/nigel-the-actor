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
	},
	{
		path: '*',
		component: () => import('./views/NotFound.vue')
	}
];

export default new Router({
	mode: 'history',
	routes
});
