import * as tf from '@tensorflow/tfjs';
import Processor from './Processor.js';

export default class postProcessor extends Processor {

	/* Just construct an instance of the object. Since we are loading data from internet, we needs to
	 * add async init. Url is the link to the body of the function. Function needs to use only Tensrorflow
	 * instance.
	 *
	 */
	constructor(store, url) {
		super(store, url);
	}
}
