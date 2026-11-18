# Reverse String Module

A CommonJS module that reverses strings with proper Unicode support, including emojis.

## Features

- Reverses strings correctly
- Handles empty strings
- Properly supports Unicode characters and emoji (surrogate pairs)

## Usage

```javascript
const { reverseString } = require('./reverse-string.cjs');

console.log(reverseString('hello'));        // 'olleh'
console.log(reverseString('Hello 👋'));     // '👋 olleH'
console.log(reverseString(''));             // ''
```

## Testing

Run the tests using Node's built-in test runner:

```bash
node --test code-mode-pr28/reverse-string.test.cjs
```

## Implementation

The function uses the spread operator (`[...value]`) to properly handle Unicode surrogate pairs, ensuring that multi-byte characters like emojis are reversed correctly as single units.
