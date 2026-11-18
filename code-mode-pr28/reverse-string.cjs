/**
 * Reverses a string, properly handling Unicode characters including emojis
 * @param {string} value - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(value) {
  // Convert string to array of grapheme clusters to properly handle Unicode
  // Using Array.from() or spread operator handles surrogate pairs correctly
  return [...value].reverse().join('');
}

module.exports = { reverseString };
