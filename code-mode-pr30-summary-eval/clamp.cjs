/**
 * Clamps a value between a minimum and maximum.
 * @param {number} value - The value to clamp
 * @param {number} min - The minimum bound
 * @param {number} max - The maximum bound
 * @returns {number} The clamped value
 * @throws {RangeError} If min > max
 */
function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError(`min (${min}) cannot be greater than max (${max})`);
  }
  return Math.max(min, Math.min(max, value));
}

module.exports = clamp;
