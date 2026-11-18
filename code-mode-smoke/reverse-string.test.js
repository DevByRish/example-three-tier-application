const reverseString = require('./reverse-string');

describe('reverseString', () => {
  test('should reverse a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should handle an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle a palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
});
