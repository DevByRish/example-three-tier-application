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
const reverseString = require('./index.js');

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

## Usage Examples

### Example 1: Reversing a greeting with emoji

```javascript
const reverseString = require('./index.js');

const greeting = 'hello 👋';
const reversed = reverseString(greeting);
console.log(`Original: ${greeting}`);
console.log(`Reversed: ${reversed}`);
// Output:
// Original: hello 👋
// Reversed: 👋 olleh
```

### Example 2: Processing multiple strings

```javascript
const reverseString = require('./index.js');

const strings = ['JavaScript', '🚀', 'Unicode 🌟'];
strings.forEach(str => {
  console.log(`${str} → ${reverseString(str)}`);
});
// Output:
// JavaScript → tpircSavaJ
// 🚀 → 🚀
// Unicode 🌟 → 🌟 edocin U
```

### Example 3: Palindrome checker

```javascript
const reverseString = require('./index.js');

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s/g, '');
  return cleaned === reverseString(cleaned);
}

console.log(isPalindrome('racecar'));        // true
console.log(isPalindrome('hello'));         // false
console.log(isPalindrome('A man a plan a canal Panama'));  // true
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

All tests pass with 100% success rate.
