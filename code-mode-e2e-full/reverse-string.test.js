const reverseString = require('./reverse-string');

describe('reverseString', () => {
  test('should reverse "hello" to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should handle empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('should handle palindrome "racecar"', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
});
