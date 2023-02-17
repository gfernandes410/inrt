
import {getEnvValue} from '../utils/environment.js';

import mongoose from 'mongoose';
const host = getEnvValue('DB_HOST');

mongoose.set('strictQuery', false);

mongoose.connect(host).catch(
	/**
	 * @param {unknown} error
	 * @returns {void}
	 */
	(error) => {
		console.error('Database connection issue', error);
	}
);

mongoose.connection.on(
	'connected',
	/**
	 * @returns {void}
	 */
	() => {
		console.info('Database connection established');
		checkStatus();
	}
);

/**
 * @returns {Promise<void>}
 */
async function checkStatus() {
	const collections = await mongoose.connection.modelNames();

	await Promise.all(collections);

	console.log('--------------------------------');
	console.log('db/mongoDb.js:38');
	console.log('',);
	console.log('collections',mongoose.connection.readyState);
	console.log('');
	console.log('--------------------------------');
	console.info('Ensured that all MongoDB collections exist for all tenants.');
}



export default mongoose;
