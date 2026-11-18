/**
 * reverseWords(text) - CommonJS utility
 * Reverses word order in text, normalizing whitespace to single spaces and trimming ends.
 */

function reverseWords(text) {
  if (typeof text !== 'string') {
    throw new TypeError('Input must be a string');
  }
  
  return text
    .trim()
    .split(/\s+/)
    .reverse()
    .join(' ');
}

module.exports = { reverseWords };
