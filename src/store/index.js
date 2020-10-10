import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tutorialPassed: false,
	},
	getters: {
		getTutorialPassed: state => {
			return state.tutorialPassed;
		},
	},
	mutations: {
		setTutorialPassed: (state, payload) => {
			return (state.tutorialPassed = payload);
		},
	},
	actions: {},
	modules: {},
});
