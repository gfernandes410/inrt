
/**
* @typedef {import('./authorize').BasicUser} BasicAuthUserCredentials
* @typedef {import('./authorize').HttpNextFunction} NextFunction
* @typedef {import('./authorize').HttpResponse} Response
* @typedef {import('./authorize').HttpResquest} Request
* @typedef {import('./authorize').PreperPropsResult} PreperPropsResult
* @typedef {import('./authorize').RequestAuthenticatedUser} RequestAuthenticatedUser
* @typedef {import('./authorize').BasicUser} BasicAuthUser
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
                authorizeBasic(request, credentials)
                break;
            case 'Bearer':
                authentizeBearer(request, credentials)
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
 * @param {string} credentials Base64 encoded string of "<username>:<password>"
 * @returns {BasicAuthUser["user"]}
 */
function decodeBasicAuth(credentials) {
	const buffer = Buffer.from(credentials, 'base64');
	const decodedCredentials = buffer.toString('ascii');
	const [email, password] = decodedCredentials.split(':', 2);

	return { email, password };
}

/**
 * @param {RequestAuthenticatedUser} request
 * @param {string} credentials
 * @returns {void}
 */
function authorizeBasic(request, credentials) {
	const user = decodeBasicAuth(credentials);

	request.user = user;
}

/**
 * @param {RequestAuthenticatedUser} request
 * @param {string} credentials
 * @returns {void}
 */
function authentizeBearer(request, credentials) {
    console.log('Bearer')
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
