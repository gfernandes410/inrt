import Email from '../../Objects/EmailAddress.js';
import IdFactory from '../../Factories/Id/index.js';
import Password from '../../Objects/Password.js';
import resolveModel from '../../Helpers/resolveModel.js';
import User from '../../Entities/User/index.js';
export default class CreateUser {

    #conn;

    constructor() {
        this.#conn = resolveModel('users');
    }

    /**
     * @param {any} request // TO-DO implement type
     */
    async execute(request) {
        const user = this._createUser(request);

        await this.#conn.insertOne(user.toObject());

        return user.toObject();
    }

    /**
     * @param {any} request // TO-DO implement type
     * @return {User}
     */
    _createUser(request) {
        return new User({
            id:  new IdFactory().create(),
            email: new Email(request.body.email),
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            password: new Password(request.body.passoword)
        });
    }

}
