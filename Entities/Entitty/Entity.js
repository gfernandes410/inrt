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
}
