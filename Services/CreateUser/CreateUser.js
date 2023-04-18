
import User from '../../Entities/User/index.js';

export default class CreateUser {

    async execute(request) {
        console.log('aqui',request.body);

        const test = new User(request.body);

        console.log('--------------------------------');
        console.log('Services/CreateUser/CreateUser.js:11');
        console.log('',);
        console.log('test',test);
        console.log('');
        console.log('--------------------------------');

    }

}
