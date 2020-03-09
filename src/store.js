import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	drawer: false,
	links: [
		{
			text: 'Home',
			icon: 'mdi-home',
			to: '/'
		}
	]
};

const getters = {
	GET_LINKS: state => state.links
};

const mutations = {
	SET_DRAWER: (state, payload) => {
		state.drawer = payload;
	},
	TOGGLE_DRAWER: state => {
		state.drawer = !state.drawer;
	}
};

export default new Vuex.Store({
	state,
	getters,
	mutations
});
