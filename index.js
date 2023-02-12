import express from "express";
import {getEnvValue} from './utils/environment.js';
import routes from './http/routes/index.js';

console.log('Started')

const app = express();
const port = getEnvValue('PORT', 4001);

app.use(routes);

app.listen(port);
