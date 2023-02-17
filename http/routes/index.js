import express from 'express';
import publicRoutes from './public/index.js'
import authRoutes from './auth/index.js'
import authorize from './../ middleware/authorize.js'

const router = express.Router();
const version = 'v1';

publicRoutes.forEach((route) => {
    router.use(
        `/${version}/${route.path}`,
        route.route
    )
})

authRoutes.forEach((route) => {
    router.use(
        `/${version}/secure/${route.path}`,
        authorize,
        route.route
    )
})

export default router;