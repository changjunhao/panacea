/**
 * Converts a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
 * @param data - The CSV string.
 * @param delimiter - The delimiter used in the CSV string.
 * @returns A 2D array of objects.
 * @example
 * ```
 * CSVToJSON('col1,col2\na,b\nc,d');
 * // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
 * CSVToJSON('col1;col2\na;b\nc;d', ';');
 * // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
 * ```
 * @category String
 * @public
 * @since 0.1.15
 */
const CSVToJSON = (data: string, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => {
        // eslint-disable-next-line no-param-reassign
        obj[title] = values[index];
        return obj;
      }, {} as { [key: string]: string });
    });
};

export default CSVToJSON;
