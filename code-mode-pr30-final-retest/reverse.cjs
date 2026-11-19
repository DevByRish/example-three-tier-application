/**
 * Reverses a string by returning its characters in reverse order.
 * @param {string} text - The text to reverse
 * @returns {string} The reversed text
 */
function reverse(text) {
  return text.split('').reverse().join('');
}

module.exports = { reverse };
