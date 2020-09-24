import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	urlForQuery() {
		return `https://api.giphy.com/v1/gifs/trending?limit=${this.limit}&api_key=${this.api_key}`
	}
});
