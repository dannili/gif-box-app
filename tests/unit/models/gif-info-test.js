import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | gif info', function(hooks) {
  setupTest(hooks);

  // check if gif-info model exist
  test('gif-info model exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('gif-info', {});
    assert.ok(model);
  });
});
