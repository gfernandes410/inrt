import mongoose from 'mongoose';
import {getEnvValue} from '../utils/environment.js';

export default class MongoDb {

    #host = getEnvValue('DB_HOST');

    // @ts-ignore -- used externally
    #connection;

    constructor() {
        this.#connection = mongoose.set('strictQuery', true).connect(this.#host);
    }

}
