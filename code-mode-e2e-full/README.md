# reverse-string-e2e

An isolated Jest 29.7.0 test project demonstrating a simple string reversal module with comprehensive test coverage.

## Usage

### Installation

```bash
npm install
```

### Running Tests

```bash
npm test
```

This runs Jest in band mode with the following test cases:

- **hello → olleh**: Reverses a simple string
- **empty string**: Handles edge case of empty input
- **racecar**: Handles palindromes (strings that read the same forwards and backwards)

### Module

The `reverse-string.js` module exports a single function:

```javascript
const reverseString = require('./reverse-string');

reverseString('hello');  // Returns 'olleh'
reverseString('');       // Returns ''
reverseString('racecar'); // Returns 'racecar'
```

## Implementation

The module uses JavaScript's built-in string methods:
- `split('')` — converts string to array of characters
- `reverse()` — reverses the array
- `join('')` — joins array back into a string

## Project Structure

```
code-mode-e2e-full/
├── package.json           # Project metadata and dependencies
├── jest.config.js         # Jest configuration
├── .gitignore             # Excludes node_modules
├── reverse-string.js      # Main module (CommonJS)
├── reverse-string.test.js # Test suite
└── README.md              # This file
```
