import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.query('gif-info', params);
	},

	setupController(controller, model) {
    	this._super(controller, model);
  	}
});
