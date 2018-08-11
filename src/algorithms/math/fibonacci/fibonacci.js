/**
 * Fibonacci Series of numbers
 * @param {number} n
 * @return {array}
 */

export default function fibonacci(n) {
  const fibSeries = [1];

  if (n === 1) {
    return fibSeries;
  }
  let currentValue = 1;
  let previousValue = 0;

  let interval = n - 1;

  while (interval > 0) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSeries.push(currentValue);
    interval -= 1;
  }
  return fibSeries;
}
