
/**
* @typedef {import('express').NextFunction} NextFunction
* @typedef {import('express').Response} Response
* @typedef {import('express').Request } Request
* @typedef {import('express').Request & { user: { id: string}}} RequestAuthenticatedUser
* @typedef {import('./PreperPropsResult').PreperPropsResult} PreperPropsResult
*/

/**
 * @param {RequestAuthenticatedUser} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {Promise<void>}
 * @description follow openAPI authorization, see doces
 * @link https://swagger.io/docs/specification/authentication/
 */
export default async function authorize(request, response, next) {
    try {
        
        const {type, credentials} = _preperProps(request);

        switch (type) {
            case 'Basic':
                request.user = {
                    id: credentials,
                };
                break;
        
            default:
                // TODO: implement error handling
                throw new Error('Invalid authorization method');
        }

        next();
    } catch (error) {
        next(error);
    }
}

/**
 * @param {Request} request
 * @returns {PreperPropsResult}
 */
function _preperProps(request) {

	if (request.headers.authorization === undefined) {
		throw new Error(
			'Request is missing "Authorization" header.'
		);
	}

    const [type, credentials] = request.headers?.authorization?.split(' ', 2);

    if(type && ['Basic','Bearer','ApiKey','OAuth2'].includes(type)) {
        return {
            // @ts-ignore - if above make sure that is going to be on of the options
            type,
            credentials
        }
    }

    return {
        type: null,
        credentials: ''
    }
}
