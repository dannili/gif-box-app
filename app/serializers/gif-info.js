import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	modelNameFromPayloadKey(key) {
		if (key === 'data') {
			return this._super(key.replace('data', 'gif-info'));
		} else {
			return this._super(key);
		}
	}
});