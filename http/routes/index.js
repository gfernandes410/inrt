import authorize from '../Middleware/Authorize.js'
import express from 'express';
import protectedRoutes from './protected/index.js'
import publicRoutes from './public/index.js'

const router = express.Router();
const version = 'v1';

publicRoutes.forEach((route) => {  
    router.use(
        `/${version}/${route.path}`,
        route.route
    )
})

protectedRoutes.forEach((route) => {
    router.use(
        `/${version}/secure/${route.path}`,
        authorize,
        route.route
    )
})

export default router;