
import express from 'express';

import CreateUserController from '../../Controller/User/Create.js';

const router = express.Router();

router.post('', async (request, response) => {
    return new CreateUserController().handle(request);
})

export default router;