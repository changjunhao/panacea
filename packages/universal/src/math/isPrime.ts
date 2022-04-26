/**
 * Checks if the provided integer is a prime number.
 * @param num - The number to check.
 * @returns True if the number is prime, false otherwise.
 * @example
 * ```typescript
 * isPrime(11); // true
 * isPrime(12); // false
 * ```
 * @public
 * @category Math
 * @since 0.1.4
 */
const isPrime = (num: number): boolean => {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};

export default isPrime;
