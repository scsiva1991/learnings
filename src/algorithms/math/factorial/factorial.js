/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

export default function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}
