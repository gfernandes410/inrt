import Email from '../../../Objects/EmailAddress.js';
import express from 'express';
import Password from '../../../Objects/Password.js';
import User from '../../../Entities/User/index.js';
import resolveModel from '../../../Helpers/resolveModel.js';
import IdFactory from '../../../Factories/Id/index.js';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    response.send('Pong!');
})

router.get('/ping/test',(request, response) => {

    const user = new User({
        id:  new IdFactory().create(),
        email: new Email('new user@example.com'),
        firstName: 'dsasad',
        lastName: 'dsasad',
        password: new Password('1321')
    });
   
    const con = resolveModel('users');

    console.log('--------------------------------');
    console.log('http/routes/public/ping.js:28');
    console.log('',);
    console.log('user',user.toObject());
    console.log('');
    console.log('--------------------------------');

    con.insertOne(user.toObject());


    console.log('Pong!')
    response.send('Pong!');
})

export default router;