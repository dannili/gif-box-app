import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | giflist', function(hooks) {
  setupTest(hooks);

  test('giflist route exists', function(assert) {
    let route = this.owner.lookup('route:home/giflist');
    assert.ok(route);
  });
});
