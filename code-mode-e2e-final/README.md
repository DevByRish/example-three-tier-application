# Slugify Utility

A lightweight CommonJS utility for converting strings into URL-friendly slugs.

## Features

- ✅ Converts to lowercase
- ✅ Trims leading and trailing whitespace
- ✅ Replaces spaces with hyphens
- ✅ Converts underscores to hyphens
- ✅ Collapses multiple consecutive hyphens
- ✅ Removes leading and trailing hyphens
- ✅ Handles edge cases (empty strings, non-string input)

## Installation

This is a standalone module. Copy `slugify.js` to your project.

## Usage

```javascript
const slugify = require('./slugify');

// Basic usage
slugify('Hello World');
// → 'hello-world'

// Handles underscores
slugify('my_file_name');
// → 'my-file-name'

// Trims whitespace
slugify('  Extra Spaces  ');
// → 'extra-spaces'

// Collapses multiple separators
slugify('too___many___underscores');
// → 'too-many-underscores'

// Real-world example
slugify('Node.js Best Practices 2024');
// → 'node.js-best-practices-2024'
```

## API

### `slugify(value)`

Converts a string to a URL-friendly slug.

**Parameters:**
- `value` (string): The input string to slugify

**Returns:**
- (string): The slugified string, or empty string if input is not a string

**Examples:**

```javascript
slugify('Hello World')        // 'hello-world'
slugify('  Trim Me  ')        // 'trim-me'
slugify('Under_Score_Test')   // 'under-score-test'
slugify('Multiple   Spaces')  // 'multiple-spaces'
slugify('')                   // ''
slugify(null)                 // ''
```

## Testing

Run the test suite using Node.js built-in test runner:

```bash
node --test slugify.test.js
```

All tests use `node:test` and `node:assert` — no external dependencies required.

## Implementation Details

The slugify function applies transformations in this order:

1. **Type check**: Returns empty string for non-string input
2. **Trim**: Removes leading/trailing whitespace
3. **Lowercase**: Converts all characters to lowercase
4. **Replace separators**: Converts underscores and spaces to hyphens
5. **Collapse hyphens**: Reduces multiple consecutive hyphens to one
6. **Clean edges**: Removes leading/trailing hyphens

## License

Part of the example-three-tier-application project.
