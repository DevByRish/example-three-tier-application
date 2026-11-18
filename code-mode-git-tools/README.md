# Reverse string utility

A simple utility to reverse strings.

## Usage

```javascript
const reverseString = require('./reverse-string');

console.log(reverseString('hello'));  // Output: olleh
console.log(reverseString(''));       // Output: (empty string)
console.log(reverseString('racecar')); // Output: racecar
```

## Testing

Run tests with:
```bash
npm test -- --runInBand
```

All tests pass:
- ✓ reverses "hello" to "olleh"
- ✓ handles empty string
- ✓ handles palindrome "racecar"
