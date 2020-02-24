import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		drawer: false,
		links: [
			{
				text: 'Home',
				icon: 'mdi-home',
				href: '#'
			}
			// {
			// 	text: 'About',
			// 	icon: 'mdi-account',
			// 	href: '#about'
			// },
			// {
			// 	text: 'Events',
			// 	icon: 'mdi-calendar-multiple',
			// 	href: '#events'
			// }
		]
	},
	getters: {
		getLinks: state => state.links
	},
	mutations: {
		setDrawer: (state, payload) => {
			state.drawer = payload;
		},
		toggleDrawer: state => {
			state.drawer = !state.drawer;
		}
	}
});
