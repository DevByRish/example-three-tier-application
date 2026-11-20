const { test } = require('node:test');
const assert = require('node:assert');
const { reverseWords } = require('./reverseWords.js');

test('reverseWords - basic word reversal', () => {
  assert.strictEqual(reverseWords('hello world'), 'world hello');
});

test('reverseWords - single word', () => {
  assert.strictEqual(reverseWords('hello'), 'hello');
});

test('reverseWords - empty string', () => {
  assert.strictEqual(reverseWords(''), '');
});

test('reverseWords - whitespace only', () => {
  assert.strictEqual(reverseWords('   '), '');
});

test('reverseWords - multiple spaces normalized', () => {
  assert.strictEqual(reverseWords('hello    world    test'), 'test world hello');
});

test('reverseWords - leading and trailing spaces trimmed', () => {
  assert.strictEqual(reverseWords('  hello world  '), 'world hello');
});

test('reverseWords - mixed whitespace (tabs, newlines)', () => {
  assert.strictEqual(reverseWords('hello\t\nworld'), 'world hello');
});

test('reverseWords - three words', () => {
  assert.strictEqual(reverseWords('the quick brown'), 'brown quick the');
});

test('reverseWords - throws on non-string input', () => {
  assert.throws(() => reverseWords(123), TypeError);
  assert.throws(() => reverseWords(null), TypeError);
  assert.throws(() => reverseWords(undefined), TypeError);
});
