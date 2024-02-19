/**
 * @param {number} numDigits
 */
export function generateRandom(numDigits) {
  return () => Math.random().toFixed(numDigits).split('.')[1];
}
