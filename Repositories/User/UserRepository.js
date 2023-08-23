/**
 * @typedef {import('../../Entities/User').default} User
 */

import resolveModel from "../../Helpers/resolveModel.js";

class UserRepository {

    #conn;

    constructor() {
        this.#conn = resolveModel('users');
    }

    /**
     * @param {User} user 
     * @return {Promise<void>}
     */
    async create(user) {
        await this.#conn.insertOne(user.toObject());
    }

}


export default UserRepository;