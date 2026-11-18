const reverseString = require('./index');

describe('reverseString', () => {
  test('reverses a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('preserves emoji and Unicode code points', () => {
    expect(reverseString('hello 👋')).toBe('👋 olleh');
  });
});
