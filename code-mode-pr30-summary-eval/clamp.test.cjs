const test = require('node:test');
const assert = require('node:assert');
const clamp = require('./clamp.cjs');

test('clamp: value below min', () => {
  const result = clamp(5, 10, 20);
  assert.strictEqual(result, 10, 'should return min when value is below min');
});

test('clamp: value above max', () => {
  const result = clamp(25, 10, 20);
  assert.strictEqual(result, 20, 'should return max when value is above max');
});

test('clamp: value inside range', () => {
  const result = clamp(15, 10, 20);
  assert.strictEqual(result, 15, 'should return value when inside range');
});

test('clamp: value equal to lower bound', () => {
  const result = clamp(10, 10, 20);
  assert.strictEqual(result, 10, 'should return value when equal to min');
});

test('clamp: value equal to upper bound', () => {
  const result = clamp(20, 10, 20);
  assert.strictEqual(result, 20, 'should return value when equal to max');
});

test('clamp: inverted bounds throws RangeError', () => {
  assert.throws(
    () => clamp(15, 20, 10),
    RangeError,
    'should throw RangeError when min > max'
  );
});
