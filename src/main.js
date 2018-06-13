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



import VueGeolocation from 'vue-browser-geolocation';


import VueRouter from 'vue-router'

//import Quasar from 'quasar-framework/dist/quasar.ios.esm'

import Quasar from "quasar-framework/dist/quasar.ios.esm";
import "quasar-framework/dist/umd/quasar.ios.css";


import 'quasar-extras/roboto-font'; // Optional
import 'quasar-extras/material-icons';
import {
	routes
} from './router/routes.js'

Vue.use(Quasar);
Vue.use(VueRouter)


Vue.use(VueGeolocation)


var router = new VueRouter({
	mode: 'history',
	routes
})


Vue.config.productionTip = false


//Vue.use(OrbitDB);

const makeDB = async(store) => {
	console.log("asyncer")
	const IPFS = require('ipfs')
	const OrbitDB = require('orbit-db')

	// OrbitDB uses Pubsub which is an experimental feature
	// and need to be turned on manually.
	// Note that these options need to be passed to IPFS in
	// all examples in this document even if not specfied so.
	const ipfsOptions = {
		EXPERIMENTAL: {
			pubsub: true
		},
	}

	// Create IPFS instance
	const ipfs = new IPFS(ipfsOptions)

	ipfs.on('ready', async() => {
		const orbitdb = new OrbitDB(ipfs)
		const db = await orbitdb.docs('recall')

		var hash = await db.put({
			_id: 'QmAwesomeIpfsHash',
			name: '-1 shamb0t',
			image: 'http://loremflickr.com/320/320/',
			preProcessor: "return data",
			postProcessor: "return data",
			followers: 500
		})

		hash = await db.put({
			_id: 'QmAwesomeIpfsHash sda',
			name: '-dasda1 shamb0t',
			image: 'http://loremflickr.com/320/320/',
			preProcessor: "return data",
			postProcessor: "return data",
			followers: 1500
		})

		hash = await db.put({
			_id: 'QmAwesomeIpfsHash 312',
			name: 'DASDASFA',
			image: 'http://loremflickr.com/320/320/',
			preProcessor: "return data",
			postProcessor: "return data",
			followers: 500
		})

		hash = await db.put({
			_id: 'QmAwesomeIpfsHashweqw',
			name: 'QQQQmb0t',
			image: 'http://loremflickr.com/320/320/',
			preProcessor: "return data",
			postProcessor: "return data",
			followers: 500
		})
		store.commit("setDB", db)
	})
}

makeDB(store);

new Vue({
	store,
	router,
	el: '#app',
	render: h => h(App)
})
