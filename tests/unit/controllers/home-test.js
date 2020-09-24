import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | home', function(hooks) {
  setupTest(hooks);

  test('home controller exists', function(assert) {
    let controller = this.owner.lookup('controller:home');
    assert.ok(controller);
  });
});
