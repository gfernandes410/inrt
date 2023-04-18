import Email from '../../../Objects/EmailAddress.js';
import express from 'express';
import Password from '../../../Objects/Password.js';
import User from '../../../Entities/User/index.js';
import resolveModel from '../../../Helpers/resolveModel.js';
import IdFactory from '../../../Factories/Id/index.js';
import CreateUserController from '../../Controller/User/Create.js';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    response.send('Pon22g!');
})

router.post('',(request, response) => {

    new CreateUserController().handle(request)

    const user = new User({
        id:  new IdFactory().create(),
        email: new Email('new user@example.com'),
        firstName: 'dsasad',
        lastName: 'dsasad',
        password: new Password('1321')
    });
   
    const con = resolveModel('users');

    con.insertOne(user.toObject());

    console.log('created user!')
    response.send('Pong!');
})

export default router;