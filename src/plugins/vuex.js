import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const urlModule = {
	namespaced: true,
	state: {
		clickedUrl: ''
	},
	mutations: {
		updateUrl(state, payload) {
			state.clickedUrl = payload;
		}
	},
	getters: {
		getUrl: state => {
			return state.clickedUrl;
		}
	},
	actions: {}
};

export default new Vuex.Store({
	strict: true,
	modules: {
		url: urlModule
	},
	mutations: {},
	getters: {}
});
