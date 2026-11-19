# reverse(text)

A simple utility function that reverses a string.

## API

### `reverse(text)`

Reverses the input string and returns the result.

**Parameters:**
- `text` (string): The string to reverse.

**Returns:**
- (string): The reversed string.

**Examples:**
```javascript
reverse('hello');  // 'olleh'
reverse('a');      // 'a'
reverse('');       // ''
```

## Testing

Run the test suite with:

```bash
node --test code-mode-pr30-final-retest/reverse.test.cjs
```

The test suite includes three test cases:
1. Empty string: `''` → `''`
2. Single character: `'a'` → `'a'`
3. Multiple characters: `'hello'` → `'olleh'`

All tests pass successfully.
