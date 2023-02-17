import express from 'express';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    response.send('Pong!');
})

export default router;