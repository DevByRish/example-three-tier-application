const { test } = require('node:test');
const assert = require('node:assert');
const { reverseString } = require('./reverse-string.cjs');

test('reverseString handles empty string', () => {
  const result = reverseString('');
  assert.strictEqual(result, '');
});

test('reverseString handles ordinary string', () => {
  const result = reverseString('hello');
  assert.strictEqual(result, 'olleh');
});

test('reverseString handles ordinary string with spaces', () => {
  const result = reverseString('hello world');
  assert.strictEqual(result, 'dlrow olleh');
});

test('reverseString handles Unicode emoji strings', () => {
  const result = reverseString('Hello 👋 World 🌍');
  assert.strictEqual(result, '🌍 dlroW 👋 olleH');
});

test('reverseString handles multiple emojis', () => {
  const result = reverseString('🚀🌟💻');
  assert.strictEqual(result, '💻🌟🚀');
});
