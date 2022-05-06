/**
 * Measures the time it takes for a function to execute.
 * @param callback - The function to measure.
 * @example
 * ```ts
 * timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
 * ```
 * @returns The result of the function.
 * @public
 * @since 0.1.9
 * @category Function
 */
const timeTaken = (callback: () => any) => {
  console.time("timeTaken");
  const r = callback();
  console.timeEnd("timeTaken");
  return r;
};

export default timeTaken;
