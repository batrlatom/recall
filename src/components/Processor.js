import * as tf from '@tensorflow/tfjs';

export default class Processor {

	/* Just construct an instance of the object. Since we are loading data from internet, we needs to
	 * add async init. Url is the link to the body of the function. Function needs to use only Tensrorflow
	 * instance.
	 *
	 */
	constructor(url) {
		this.url = url;
	}

	/* Load body of the processor function from the url provided in the constructor
	 *
	 */
	async init() {
		try {
			var xhr = new XMLHttpRequest();
			var obj = this;
			xhr.onload =
				await

			function () {
				console.log(xhr.responseText);
				obj.fce = new Function('data', 'tf', xhr.responseText);
			}
			xhr.open("GET", this.url);
			xhr.send();
		} catch (error) {
			console.log(error)
		}
	}

	/*
	 *
	 *
	 *
	 */
	compute(data) {
		return this.fce(data, tf);
	}
}
