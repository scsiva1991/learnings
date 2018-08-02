
/**
 * Find GCD of given two numbers
 * using Euclidean Algorithm
 * https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function euclideanAlgorithm(a, b) {
  return (a === 0) ? b : euclideanAlgorithm(b % a, a);
}
