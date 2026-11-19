const { test } = require('node:test');
const assert = require('node:assert');
const { add } = require('./add.cjs');

test('2 + 3 = 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('0 + 0 = 0', () => {
  assert.strictEqual(add(0, 0), 0);
});

test('-2 + 5 = 3', () => {
  assert.strictEqual(add(-2, 5), 3);
});
