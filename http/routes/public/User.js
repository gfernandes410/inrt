
import express from 'express';

import CreateUserController from '../../Controller/User/Create.js';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    response.send('Pong!');
})

router.post('', async (request, response) => {
    await new CreateUserController().handle(request);
})

export default router;