import Id from '../../Objects/Id.js';

export default class Entity {

    /**
     * @protected
     * @type {Id}
     */
    _id;

    /**
     * 
     * @param {Id} id 
     */
    constructor(id) {
        this._id = id;

        /**
         * @link https://stackoverflow.com/questions/42244315/javascript-ecma-6-class-magic-method-call-like-php
         */
        return new Proxy(this, {
			apply: function(target){

				console.log('--------------------------------');
				console.log('Entities/Entitty/Entity.js:24');
				console.log('',);
				console.log('target',target);
				console.log('');
				console.log('--------------------------------');

				return target;
			},
            get: function(entity, field) {

				if (entity[field].value) {
					return entity[field].value;
				}

                return entity[field];
            }
        })
    }



	_getFields() {
		const descriptors = Object.getOwnPropertyDescriptors(this);
		const keys = Object.keys(descriptors).filter(
			/**
			 *
			 * @param {string} key
			 * @returns {boolean}
			 */
			(key) => {
				const isFunction = typeof descriptors[key].value !== 'function';

				return (isFunction && descriptors[key].writable) || false;
			}
		);

		return keys;
	}

    toObject() {
		return 'adasdsadasdsa';
    }
}
