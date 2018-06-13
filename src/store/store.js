import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


export const store = new Vuex.Store({
	state: {
		// Current state of the application lies here.
		test: "RECALL",
		image: null,
		output: "",
		recall_marketplace: false,
		opened_modal: 0,
		processing: true,
		database: null
	},
	getters: {
		// Compute derived state based on the current state. More like computed property.
	},
	mutations: {
		// Mutate the current state
		changer(state, newone) {
			// mutate state
			state.test = newone
		},
		// Mutate the current state
		output_changer(state, newone) {
			// mutate state
			state.output = newone
		},
		setImage(state, newone) {
			state.image = newone
		},
		setRecallMarketplaceOpen(state) {
			state.recall_marketplace = true
		},
		setRecallMarketplaceClose(state) {
			state.recall_marketplace = false
		},
		setOpenedModal(state, new_state) {
			state.opened_modal = new_state

		},
		setModalsClose(state) {
			state.opened_modal = 0
		},
		startProcessing(state) {
			state.processing = true;
		},
		stopProcessing(state) {
			state.processing = false;
		},
		setDB(state, database) {
			state.database = database
		}


	},
	actions: {
		// Get data from server and send that to mutations to mutate the current state
	}
})
