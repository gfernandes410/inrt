import db from '../../db/conn.js';
import userCreate from './seeder/user.js'

/**
* @typedef {'User'} ModelName
**/

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