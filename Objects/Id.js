import ValueObject from './ValueObject.js';

export default class Id extends ValueObject{
    /**
	 * Create an Id.
	 * @param {string} value
	 */
	constructor(value) {
		super();
		this.value = value;
		Object.freeze(this);
	}
}
