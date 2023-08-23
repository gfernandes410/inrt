export default class Controller {

    /**
     * @type {any}
     */
    #request

    /**
     * @param {any} httpRequest
     */
    async handle(httpRequest) {
        this.validate(httpRequest);
        this.#request = this.mapHttpRequestToResquest(httpRequest);
        return this.execute(this.#request)
    }

    // @ts-ignore -- used on son classes
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