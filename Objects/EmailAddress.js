import ValueObject from './ValueObject.js';

export default class EmailAddress extends ValueObject {

    /**
     * @param {string} value
     */
    constructor(value) {
        super();
        this.value = value.toLowerCase();
		Object.freeze(this);
    }

}
