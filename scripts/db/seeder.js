import db from '../../Db/conn.js';
import userCreate from './seeder/user.js'

/**
* @typedef {'user'} ModelName
**/

/** @type {ModelName[]} */
const seederList = [
    'user'
];

/**
 * @param {ModelName} type
 */
function remove(type) {
	return db.collection(type).deleteMany({});
}

/**
 * @param {ModelName} type
 * //TODO implement user type
 * @param {any} payload
 */
function createModel(type, payload) {
	return db.collection(type).insertMany(payload);
}

async function main() {
    return Promise.all(seederList.map((type) => {
        remove(type)
        .then(() => console.info('Deleted models.', type))
        .then(() => createModel(type, userCreate(1)))
        .catch((error) => console.error('Error creating models',error))
    }))
}

main();