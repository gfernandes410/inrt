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
    }

    /**
	 * @protected
	 */
	_getFields() {
		const descriptors = Object.getOwnPropertyDescriptors(this);

        console.log('--------------------------------');
        console.log('Entities/Entitty/Entity.js:27');
        console.log('',);
        console.log('descriptors',descriptors);
        console.log('');
        console.log('--------------------------------');

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
        const object = {};

        const fieldList = Object.keys(this._getFields()).map(
            (string) => string.replace(/_/g, '')
        );

            fieldList.push('id');
            fieldList.forEach(
                (field) => {
                    // @ts-ignore
                    object[field] = field;
                }
            )

    }

}
