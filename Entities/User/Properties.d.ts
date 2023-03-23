import EmailAddress from '../../Objects/EmailAddress.js';
import Id from '../../Objects/Id.js';
import Password from '../../Objects/Password';

type UserProperties = {
	readonly email: EmailAddress;
	readonly firstName: string;
	readonly id: Id;
	readonly lastName: string;
	readonly password: Password;
};

export default UserProperties;
