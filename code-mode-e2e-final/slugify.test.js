const { test } = require('node:test');
const assert = require('node:assert');
const slugify = require('./slugify.js');

test('converts to lowercase', () => {
  assert.strictEqual(slugify('HELLO WORLD'), 'hello-world');
  assert.strictEqual(slugify('MixedCase'), 'mixedcase');
});

test('trims leading and trailing whitespace', () => {
  assert.strictEqual(slugify('  hello  '), 'hello');
  assert.strictEqual(slugify('\t\ntrim me\n\t'), 'trim-me');
});

test('replaces spaces with hyphens', () => {
  assert.strictEqual(slugify('hello world'), 'hello-world');
  assert.strictEqual(slugify('multiple   spaces'), 'multiple-spaces');
});

test('converts underscores to hyphens', () => {
  assert.strictEqual(slugify('hello_world'), 'hello-world');
  assert.strictEqual(slugify('under_score_test'), 'under-score-test');
  assert.strictEqual(slugify('mixed_under score'), 'mixed-under-score');
});

test('collapses multiple hyphens', () => {
  assert.strictEqual(slugify('hello---world'), 'hello-world');
  assert.strictEqual(slugify('too___many___underscores'), 'too-many-underscores');
});

test('removes leading and trailing hyphens', () => {
  assert.strictEqual(slugify('-hello-'), 'hello');
  assert.strictEqual(slugify('___test___'), 'test');
});

test('handles empty strings', () => {
  assert.strictEqual(slugify(''), '');
  assert.strictEqual(slugify('   '), '');
});

test('handles non-string input', () => {
  assert.strictEqual(slugify(null), '');
  assert.strictEqual(slugify(undefined), '');
  assert.strictEqual(slugify(123), '');
  assert.strictEqual(slugify({}), '');
});

test('complex real-world examples', () => {
  assert.strictEqual(
    slugify('  Hello World: A Test_Case  '),
    'hello-world:-a-test-case'
  );
  assert.strictEqual(
    slugify('Node.js Best Practices'),
    'node.js-best-practices'
  );
  assert.strictEqual(
    slugify('2024_Annual_Report'),
    '2024-annual-report'
  );
});
