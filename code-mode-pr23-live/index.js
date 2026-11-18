/**
 * Reverse a string while preserving Unicode code points (including emojis).
 * Uses Array.from() to properly handle multi-byte characters.
 * 
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

module.exports = reverseString;
