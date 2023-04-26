import auth from './Auth.js';
import ping from './Ping.js';
import user from './User.js';

const publicRoutes = [
    {path: '', route: auth},
    {path: 'user', route: user},
    {path: '', route: ping},
];

export default publicRoutes;