/**
 * Converts a comma-separated values (CSV) string to a 2D array.
 * @param data - The CSV string.
 * @param delimiter - The delimiter used in the CSV string.
 * @param omitFirstRow - Whether to omit the first row of the CSV string.
 * @returns The 2D array.
 * @throws If the CSV string is invalid.
 * @example
 * ```typescript
 * CSVToArray('a,b\nc,d'); // [['a', 'b'], ['c', 'd']];
 * CSVToArray('a;b\nc;d', ';'); // [['a', 'b'], ['c', 'd']];
 * CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];
 * ```
 * @since 0.1.10
 * @public
 * @category String
 */
const CSVToArray = (data: string, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

export default CSVToArray;
