
import express from 'express';

import CreateUserController from '../../Controller/User/Create.js';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    response.send('Pong!');
})

router.post('',(request, response) => {
    new CreateUserController().handle(request);
})

export default router;