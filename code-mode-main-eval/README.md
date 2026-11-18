# reverseWords Utility

A lightweight CommonJS utility that reverses the word order in a text string.

## Features

- **Word order reversal**: Reverses the sequence of words in input text
- **Whitespace normalization**: Collapses multiple spaces/tabs/newlines into single spaces
- **Trimming**: Removes leading and trailing whitespace
- **Type safety**: Validates input is a string; throws `TypeError` otherwise
- **Zero dependencies**: Pure Node.js implementation

## Installation

Copy `reverseWords.js` into your project.

## Usage

```javascript
const { reverseWords } = require('./reverseWords.js');

console.log(reverseWords('hello world'));           // 'world hello'
console.log(reverseWords('the quick brown fox'));   // 'fox brown quick the'
console.log(reverseWords('  hello    world  '));    // 'world hello'
```

## API

### `reverseWords(text)`

**Parameters:**
- `text` (string): The input text to reverse

**Returns:**
- (string): Text with words in reversed order, whitespace normalized, and trimmed

**Throws:**
- `TypeError`: If input is not a string

## Examples

| Input | Output |
|-------|--------|
| `'hello world'` | `'world hello'` |
| `'  hello    world  '` | `'world hello'` |
| `'the quick brown'` | `'brown quick the'` |
| `'hello'` | `'hello'` |
| `''` | `''` |

## Testing

Run the test suite with:

```bash
node --test reverseWords.test.js
```

All 9 tests verify:
- Basic word reversal
- Single word handling
- Empty string handling
- Whitespace-only input
- Multiple space normalization
- Leading/trailing space trimming
- Mixed whitespace (tabs, newlines)
- Multi-word sequences
- Type validation

## License

MIT
