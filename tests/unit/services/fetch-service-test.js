import { module, test } from 'qunit';
import { setupTest } from 'did-you-mean-this/tests/helpers';

module('Unit | Service | fetch-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:fetch-service');
    assert.ok(service);
  });
});
