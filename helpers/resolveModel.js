import db from '../Db/conn.js'; 

/**
 * @param {string} name
 * // TO-DO: implement the return 
 */
function resolveModel(name) {
	return db.collection(name);
}

export default resolveModel;
