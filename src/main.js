// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/*
import {
	getNetIdString,
	getEthWallets
} from './web3Service'
*/
//import OrbitDB from './orbitDBPlugin'

import {
	store
} from './store/store.js'



//import VueGeolocation from 'vue-browser-geolocation';


import VueRouter from 'vue-router'

//import Quasar from 'quasar-framework/dist/quasar.ios.esm'

import Quasar from "quasar-framework/dist/quasar.ios.esm";
import "quasar-framework/dist/umd/quasar.ios.css";


import 'quasar-extras/roboto-font'; // Optional
import 'quasar-extras/material-icons';
import {
	routes
} from './router/routes.js'


Vue.use(Quasar)


Vue.use(VueRouter)


//Vue.use(VueGeolocation)


var router = new VueRouter({
	mode: 'history',
	routes
})


Vue.config.productionTip = false


//Vue.use(OrbitDB);
import {
	initDecentralization
} from './decentral/decentral.js'

initDecentralization(store);

new Vue({
	store,
	router,
	el: '#app',
	render: h => h(App)
})
