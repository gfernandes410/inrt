import {getEnvValue} from './utils/environment.js';
import express from "express";
import mongoose from 'mongoose';
import routes from './http/routes/index.js';
import database from './db/mongoDb.js';

console.log('Started')

const app = express();
const port = getEnvValue('PORT', 4001);

app.use(routes);

app.listen(port);
