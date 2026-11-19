/**
 * Unicode-aware string reversal using Array.from
 * Handles multi-byte characters and emoji correctly
 */
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

module.exports = { reverseString };
