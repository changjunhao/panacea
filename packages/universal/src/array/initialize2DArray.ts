/**
 * Initializes a 2D array of given width and height and value.
 * @param w - Width of the array.
 * @param h - Height of the array.
 * @param val - Value to initialize the array with.
 * @returns A 2D array of given width and height and value.
 * @example
 * ```ts
 * initialize2DArray(2, 2, 0); // [[0, 0], [0, 0]]
 * ```
 * @public
 * @category Array
 * @since 0.1.8
 */
const initialize2DArray = (w: number, h: number, val: any = null): any[][] =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

export default initialize2DArray;
