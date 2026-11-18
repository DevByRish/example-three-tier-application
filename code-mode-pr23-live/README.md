# Reverse String Utility

A lightweight, Unicode-aware string reversal utility that correctly handles multi-byte characters and emoji.

## Overview

This utility provides a `reverseString` function that reverses strings while properly respecting Unicode code points. Unlike naive string reversal approaches that operate on UTF-16 code units, this implementation uses `Array.from()` to correctly handle:

- Multi-byte Unicode characters
- Emoji and other supplementary plane characters
- Combining diacritical marks (in most cases)

## Features

- **Unicode-aware**: Correctly reverses strings containing emoji and multi-byte characters
- **Simple API**: Single exported function with clear behavior
- **Well-tested**: Comprehensive test suite covering edge cases
- **Zero dependencies**: Pure JavaScript implementation

## Installation

```bash
npm install
```

## Usage

```javascript
const { reverseString } = require('./index.js');

// Basic string
console.log(reverseString('hello'));  // 'olleh'

// Empty string
console.log(reverseString(''));       // ''

// Emoji
console.log(reverseString('👋🌍'));   // '🌍👋'
```

## API

### `reverseString(str: string): string`

Reverses the input string while preserving Unicode code points.

**Parameters:**
- `str` (string): The string to reverse

**Returns:**
- (string): The reversed string

**Example:**
```javascript
reverseString('abc')     // 'cba'
reverseString('🎉🎊')    // '🎊🎉'
```

## Testing

Run the test suite:

```bash
npm test
```

Tests cover:
- Normal ASCII strings
- Empty strings
- Emoji and multi-byte Unicode characters
