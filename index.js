import {getEnvValue} from './Utils/environment.js';
import bodyParser from "body-parser";
import express from "express";
import routes from './Http/Routes/index.js';

console.log('Started')

const app = express();
const port = getEnvValue('PORT', 4001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen(port);
