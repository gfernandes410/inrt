import express from 'express';

const router = express.Router();

router.post('/login',(request, response) => {

    console.log('--------------------------------');
    console.log('http/routes/public/auth.js:7');
    console.log('',);
    console.log('request.body',request.body);
    console.log('');
    console.log('--------------------------------');

    console.log('login!')
    response.send('login!');
})

export default router; 