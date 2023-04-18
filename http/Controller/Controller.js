export default class Controller {

    /**
     * @type {any}
     */
    #request

    /**
     * @param {any} httpRequest
     */
    handle(httpRequest) {

        console.log('--------------------------------');
        console.log('Http/Controller/Controller.js:13');
        console.log('',);
        console.log('AQUI');
        console.log('');
        console.log('--------------------------------');

        this.validate(httpRequest);
        this.#request = this.mapHttpRequestToResquest(httpRequest);
        this.execute(httpRequest)
    }

    execute(httpRequest) {
        throw new Error('This method should be implemented');
    }

    /**
     * @param {any} httpRequest
     */
    validate(httpRequest) {
        throw new Error('This method should be implemented');
    }

    /**
     * @param {any} httpRequest
     */
    mapHttpRequestToResquest(httpRequest) {
        throw new Error('This method should be implemented');
    }
}