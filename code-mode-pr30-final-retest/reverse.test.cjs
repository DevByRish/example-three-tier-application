const { test } = require('node:test');
const assert = require('node:assert');
const { reverse } = require('./reverse.cjs');

test('reverse empty string', () => {
  assert.strictEqual(reverse(''), '');
});

test('reverse one character', () => {
  assert.strictEqual(reverse('a'), 'a');
});

test('reverse hello to olleh', () => {
  assert.strictEqual(reverse('hello'), 'olleh');
});
