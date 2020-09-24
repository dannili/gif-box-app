import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		seeGifs() {
			this.transitionToRoute("home.giflist");
		}
	}
});