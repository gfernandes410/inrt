import express from 'express';
import publicRoutes from './public/index.js'

const router = express.Router();
const version = 'v1';

publicRoutes.forEach((route) => {
    router.use(
        `/${version}/${route.path}`,
        route.route
    )
})

export default router;