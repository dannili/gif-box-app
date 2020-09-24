import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting home page renders correctly', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('home page shows correct header', async function(assert) {
    await visit('/');
    assert.ok(find('Top Gifs of Today'));
  });

  test('giflist page shows correct header', async function(assert) {
    await visit('/');
    await click('button');
    assert.ok(find('Top Gifs of Today'));
  });

  //TODO:
  // - test home page has 'show me now' button
  // - test clicking on the button bring up giflist view
});
