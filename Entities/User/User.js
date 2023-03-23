/** @typedef {import('./Properties').default} Properties */

import Entity from '../Entitty/Entity.js';

export default class User extends Entity {
    #email;
    #firstName;
    #lastName;
    #password;
    
    /**
     * 
     * @param {Properties} properties 
     */
    constructor(properties) {
        super(properties.id);
        this.#email = properties.email;
        this.#firstName = properties.firstName;
        this.#lastName = properties.lastName;
        this.#password = properties.password;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get fulltName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#firstName;
    }

    set lastName(value) {
        this.#firstName = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

};
