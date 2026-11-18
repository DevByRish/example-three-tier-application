/**
 * Convert a string to a URL-friendly slug.
 * 
 * @param {string} value - The input string to slugify
 * @returns {string} The slugified string
 * 
 * @example
 * slugify('Hello World')        // 'hello-world'
 * slugify('  Trim Me  ')        // 'trim-me'
 * slugify('Under_Score_Test')   // 'under-score-test'
 * slugify('Multiple   Spaces')  // 'multiple-spaces'
 */
function slugify(value) {
  if (typeof value !== 'string') {
    return '';
  }

  return value
    .trim()                           // Remove leading/trailing whitespace
    .toLowerCase()                    // Convert to lowercase
    .replace(/[_\s]+/g, '-')          // Replace underscores and spaces with hyphens
    .replace(/-+/g, '-')              // Collapse multiple hyphens into one
    .replace(/^-|-$/g, '');           // Remove leading/trailing hyphens
}

module.exports = slugify;
