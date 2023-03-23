import auth from './auth.js';
import ping from './ping.js';

const publicRoutes = [
    {path: '', route: ping},
    {path: '', route: auth}
];

export default publicRoutes;