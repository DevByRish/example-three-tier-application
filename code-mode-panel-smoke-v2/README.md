# Reverse String Function

## Overview

This module provides a simple `reverseString` function that takes a string as input and returns the reversed string.

## Function

### `reverseString(str)`

Reverses the input string by:
1. Splitting the string into an array of characters
2. Reversing the array
3. Joining the array back into a string

**Parameters:**
- `str` (string): The string to reverse

**Returns:**
- (string): The reversed string

**Example:**
```javascript
const reverseString = require('./reverse-string');

reverseString('hello');   // Returns: 'olleh'
reverseString('racecar'); // Returns: 'racecar'
reverseString('');        // Returns: ''
```

## Tests

The module includes Jest tests covering three key scenarios:

1. **Basic reversal**: Verifies that "hello" is correctly reversed to "olleh"
2. **Empty string**: Ensures the function handles empty strings gracefully
3. **Palindrome**: Tests that palindromes like "racecar" remain unchanged when reversed

### Running Tests

```bash
npm test
```

All tests are configured to run sequentially with the `--runInBand` flag for consistent output.
