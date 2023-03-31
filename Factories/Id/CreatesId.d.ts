type Id = import('../../Objects/Id');

export default interface CreatesId {
	/**
	 * @returns {Id}
	 */
	create(): Id;
}
