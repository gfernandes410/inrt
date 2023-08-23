/**
 * @typedef {import('./CreateUserHttpRequest').default} HttpRequest
 * @typedef {import('./CreateUserRequest').default} CreateUserRequest
 */

import Controller from "../Controller.js";
import CreateUser from './../../../Services/CreateUser/CreateUser.js';

export default class CreateUserController extends Controller {

    /**
     * @param {any} request // TO-DO fix
     */
    async execute(request) {
        return new CreateUser().execute(request);
    }

    /**
     * @param {HttpRequest} httpRequest
    * @returns {boolean}
     */
    validate(httpRequest) {
      // TO-DO implement
      return true;
    }

    /**
     * @param {HttpRequest} httpRequest
     * @returns {CreateUserRequest} 
     */
    mapHttpRequestToResquest(httpRequest) {
        return {
            email: httpRequest.body.email,
            firstName: httpRequest.body.first_name,
            lastName: httpRequest.body.last_name,
            password: httpRequest.body.password,
        }
    }
}
