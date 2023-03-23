import Email from '../../../Objects/EmailAddress.js';
import express from 'express';
import Id from '../../../Objects/Id.js';
import Password from '../../../Objects/Password.js';
import User from '../../../Entities/User/index.js';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    response.send('Pong!');
})

router.get('/ping/test',(request, response) => {

    const user = new User({
        id: new Id('234'),
        email: new Email('test@example.com'),
        firstName: 'dsasad',
        lastName: 'dsasad',
        password: new Password('1321')
    });

    console.log('--------------------------------');
    console.log('http/routes/public/ping.js:24');
    console.log('',);
    console.log('user',user);
    console.log('user',user.fulltName);
    user.firstName = 'test';
    console.log('user',user.fulltName);
    console.log('');
    console.log('--------------------------------');

    console.log('Pong!')
    response.send('Pong!');
})

export default router;