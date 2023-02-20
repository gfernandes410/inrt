import express from 'express';
import db from '../../../db/conn.js';

const router = express.Router();

router.get('/ping',(request, response) => {
    console.log('Pong!')
    console.log('user', request.user)
    response.send('Pong!');
})

router.get('/ping-db', async (request, response) => {
    console.log('Pong database!')
    console.log('user', request.user)

    let collection = await db.listCollections().toArray();;

    console.log('--------------------------------');
    console.log('http/routes/protected/ping.js:18');
    console.log('',);
    console.log('collection',collection);
    console.log('');
    console.log('--------------------------------');

    response.send('Pong database!');
})

export default router;