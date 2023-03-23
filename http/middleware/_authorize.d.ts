type BasicUser = {
	readonly user: {
		email: string,
		password: string
	}
}

export type HttpNextFunction = import('express').NextFunction;

export type HttpResponse = import('express').Response;

export type HttpResquest = import('express').Request;

export type PreperPropsResult = {
	type: 'Basic' | 'Bearer' | 'ApiKey' | 'OAuth2' | null,
	credentials: string
}

export type RequestAuthenticatedUser = HttpResquest & BasicUser;