/**
 * Converts an array of objects to a comma-separated values (CSV) string that contains only the columns specified.
 * @param arr - The array of objects to convert.
 * @param columns - The columns to include in the CSV string.
 * @param delimiter - The delimiter to use between columns.
 * @returns The CSV string.
 * @example
 * ```typescript
 * JSONtoCSV(
 *   [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
 *   ['a', 'b']
 * ); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
 * JSONtoCSV(
 *   [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
 *   ['a', 'b'],
 *   ';'
 * ); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'
 * ```
 * @public
 * @since 0.1.3
 */
const JSONtoCSV = (
  arr: { [p: string]: string | number }[],
  columns: string[],
  delimiter = ","
) =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
        ""
      )
    ),
  ].join("\n");

export default JSONtoCSV;
