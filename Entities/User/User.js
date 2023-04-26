/** @typedef {import('./Properties').default} Properties */

import Entity from '../Entitty/Entity.js';

export default class User extends Entity {
    
    /**
     * @protected
     * @type {Properties['email']}
     */
    _email;
    _firstName;
    _lastName;
    _password;
    
    /**
     * 
     * @param {Properties} properties 
     */
    constructor(properties) {
        super(properties.id);
        this._email = properties.email;
        this._firstName = properties.firstName;
        this._lastName = properties.lastName;
        this._password = properties.password;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get fulltName() {
        return `${this._firstName} ${this._lastName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._firstName;
    }

    set lastName(value) {
        this._firstName = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    toObject() {
        return {
            _id: this._id.value,
            email: this._email.value,
            name: this.fulltName,
            password: this._password.value,
        }
    }

};
