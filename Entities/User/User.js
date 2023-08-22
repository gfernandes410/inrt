/** @typedef {import('./Properties').default} Properties */

import Entity from '../Entitty/Entity.js';

export default class User extends Entity {
    
    /**
     * @protected
     * @type {Properties['email']}
     */
    email;
    firstName;
    lastName;
    password;
    
    /**
     * 
     * @param {Properties} properties 
     */
    constructor(properties) {
        super(properties.id);
        this.email = properties.email;
        this.firstName = properties.firstName;
        this.lastName = properties.lastName;
        this.password = properties.password;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

};
