import {getEnvValue} from '../utils/environment.js';
import { MongoClient } from "mongodb";

const connectionString = getEnvValue('DB_HOST');

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

// @ts-ignore
let db = conn.db(getEnvValue('DB_DATABASE'));

export default db;