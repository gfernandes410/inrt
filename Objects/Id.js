/**
 * @typedef {import('mongodb').ObjectId} ObjectId
 */

import ValueObject from './ValueObject.js';

export default class Id extends ValueObject{
    /**
	 * Create an Id.
	 * @param {ObjectId} value
	 */
	constructor(value) {
		super();
		this.value = value;
		Object.freeze(this);
	}
}
