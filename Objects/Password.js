import ValueObject from './ValueObject.js';

export default class Password extends ValueObject {

    /**
     * @param {string} value
     */
    constructor(value) {
        super();
        this.value = value;
		Object.freeze(this);
    }

}
