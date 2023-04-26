import HttpRequest from '../HttpRequest';

type CreateUserHttpRequest = HttpRequest & {
	readonly email: string,
	readonly first_name: string,
	readonly last_name: string,
	readonly password: string
};

export default CreateUserHttpRequest;
