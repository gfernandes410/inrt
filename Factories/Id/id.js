/**
 * @typedef {import('./CreatesId').default} CreatesId
 */
import Id from '../../Objects/Id.js'
import { ObjectId } from "mongodb";


/**
 * @implements {CreatesId}
 */
class IdFactory {
	create() {
		return new Id(new ObjectId(Date.now()));
	}
}

export default IdFactory;
