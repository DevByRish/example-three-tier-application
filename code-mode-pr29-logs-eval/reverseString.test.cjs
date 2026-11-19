const { test } = require('node:test');
const assert = require('node:assert');
const { reverseString } = require('./reverseString.cjs');

test('reverseString - ASCII characters', () => {
  const result = reverseString('hello');
  assert.strictEqual(result, 'olleh');
});

test('reverseString - emoji and Unicode', () => {
  const result = reverseString('hello 👋 world');
  assert.strictEqual(result, 'dlrow 👋 olleh');
});

test('reverseString - empty input', () => {
  const result = reverseString('');
  assert.strictEqual(result, '');
});
