/**
 * @typedef {import('./CreateUserHttpRequest').default} CreateUserHttpRequest
 */

import Controller from "../Controller.js";
import CreateUser from './../../../Services/CreateUser/CreateUser.js';

export default class CreateUserController extends Controller {

    /**
     * @param {any} request // TO-DO fix
     */
    async execute(request) {
        const controller = new CreateUser();

        return await controller.execute(request);
    }

    /**
     * @param {CreateUserHttpRequest} httpRequest
    * @returns {boolean}
     */
    validate(httpRequest) {
      // TO-DO implement
      return true;
    }

    /**
     * @param {CreateUserHttpRequest} httpRequest
     */
    mapHttpRequestToResquest(httpRequest) {
        return {
            email: httpRequest.email,
            firstName: httpRequest.first_name,
            lastName: httpRequest.last_name,
            password: httpRequest.password,
        }
    }
}
