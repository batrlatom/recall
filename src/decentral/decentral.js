/*
 *   initialize ipfs repo
 *
 */
/*
const node = new Ipfs({
	repo: 'ipfs-'
})
*/
import *
as contractJSON
from './contract.json'


/*
Initialize web3 ( ropsten ), recall contract and fetch all recalls.
*/
export async function loadRecalls(address) {

	var Web3 = require("web3");
	var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io"));

	console.log(web3.eth.accounts);


	// Previous if/else statement removed for brevity

	web3.eth.defaultAccount = web3.eth.accounts[0];

	var mktplc = new web3.eth.Contract([{
			"constant": false,
			"inputs": [{
					"name": "name",
					"type": "string"
	            },
				{
					"name": "brain",
					"type": "string"
	            },
				{
					"name": "image",
					"type": "string"
	            },
				{
					"name": "preprocess",
					"type": "string"
	            },
				{
					"name": "postprocess",
					"type": "string"
	            }
	        ],
			"name": "appendRecall",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
	    },
		{
			"constant": true,
			"inputs": [],
			"name": "getCount",
			"outputs": [{
				"name": "count",
				"type": "uint256"
	        }],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	    },
		{
			"constant": true,
			"inputs": [{
				"name": "index",
				"type": "uint256"
	        }],
			"name": "getRecallatIndex",
			"outputs": [{
					"name": "name",
					"type": "string"
	            },
				{
					"name": "image",
					"type": "string"
	            },
				{
					"name": "brain",
					"type": "string"
	            },
				{
					"name": "preprocess_code",
					"type": "string"
	            },
				{
					"name": "postprocess_code",
					"type": "string"
	            }
	        ],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
	    },
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
	    }


		], address);


	//var mktplc = MarketplaceContract.at(address);
	console.log(mktplc);

	var promise = new Promise(function (resolve, reject) {

		var count = mktplc.methods.getCount().call()
			.then(function (result) {
				console.log("result")
				var output = []
				for (var i = 0; i < result; i++) {
					var recall = mktplc.methods.getRecallatIndex(i).call().then(function (result) {;
						//console.log(result)
						output.push(result)

					})
				}


				console.log(output)
				resolve(output)
			});


		//setTimeout(resolve, 100, 'foo');
	});


	return promise;
}



/*
Load image from ipfs hash and write it to img element
*/
export function loadImage(img, hash) {
	node.files.cat(hash, function (err, data) {
		// Obtain a blob: URL for the image data.
		var arrayBufferView = new Uint8Array(data);
		var blob = new Blob([arrayBufferView], {
			type: "image/jpeg"
		});
		var urlCreator = window.URL || window.webkitURL;
		var imageUrl = urlCreator.createObjectURL(blob);
		img.src = imageUrl;

	})
}



/*
Initialize ipfs repo.

!!!!! test loading image into imagetest img
*/
export function loadIpfsData() {
	console.log("ipfs:");


	node.once('ready', () => {
		//console.log('Online status: ', node.isOnline() ? 'online' : 'offline')
		//document.getElementById("status").innerHTML = 'Node status: ' + (node.isOnline() ? 'online' : 'offline')

		console.log("ipfs: ready");



		loadRecalls("0xc4521fe040288e94901ceb51545a63a1fb7b0de4");



	})
}


export async function initDecentralization(store) {


	//const makeDB = async(store) => {
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
