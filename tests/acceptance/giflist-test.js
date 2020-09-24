import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | giflist', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting giflist renders correctly', async function(assert) {
    await visit('/giflist');
    assert.equal(currentURL(), '/giflist');
  });
});
