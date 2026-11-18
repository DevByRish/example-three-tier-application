const reverseString = require('./reverse-string');

describe('reverseString', () => {
  test('reverses "hello" to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('handles palindrome "racecar"', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
});
