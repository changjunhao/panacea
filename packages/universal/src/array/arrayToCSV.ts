/**
 * Converts a 2D array to a comma-separated values (CSV) string.
 * @param arr - The array to convert.
 * @param delimiter - The delimiter to use.
 * @returns The CSV string.
 * @example
 * ```ts
 * arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
 * arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
 * arrayToCSV([['a', '"b" great'], ['c', 3.1415]]);
 * // '"a","""b"" great"\n"c",3.1415'
 * ```
 * @since 0.1.10
 * @public
 * @category Array
 */
const arrayToCSV = (arr: (string | number)[][], delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) =>
          Number.isNaN(Number(x)) ? `"${(x as string).replace(/"/g, '""')}"` : x
        )
        .join(delimiter)
    )
    .join("\n");

export default arrayToCSV;
