
import User from '../../Entities/User/index.js';

export default class CreateUser {

    /**
     * @param {{ body: import("../../Entities/User/Properties.js").default; }} request
     */
    async execute(request) {
        new User(request.body);
    }

}
