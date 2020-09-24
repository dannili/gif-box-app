import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | gif info', function(hooks) {
  setupTest(hooks);

  // test if gif-info serializer exists.
  test('gif-info serializer exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('gif-info');

    assert.ok(serializer);
  });

  test('gif-info serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('gif-info', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
