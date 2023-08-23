/**
 * @typedef {import('../../Http/Controller/User/CreateUserRequest').default} CreateUserRequest
 */

import Email from '../../Objects/EmailAddress.js';
import IdFactory from '../../Factories/Id/index.js';
import Password from '../../Objects/Password.js';
import User from '../../Entities/User/User.js';
import UserRepository from '../../Repositories/User/UserRepository.js';

export default class CreateUser {

    #userRepository;

    constructor() {
        this.#userRepository = new UserRepository();
    }

    /**
     * @param {CreateUserRequest} request
     */
    async execute(request) {
        const user = this._createUser(request);

        await this.#userRepository.create(user);

        return user.toObject();
    }

    /**
     * @param {CreateUserRequest} request
     * @return {User}
     */
    _createUser(request) {
        return new User({
            id:  new IdFactory().create(),
            email: new Email(request.email),
            firstName: request.firstName,
            lastName: request.lastName,
            password: new Password(request.password)
        });
    }

}
