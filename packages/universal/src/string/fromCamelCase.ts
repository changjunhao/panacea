/**
 * Converts a string from camelcase.
 * @param str - The string to convert.
 * @param separator - The separator to use.
 * @returns The converted string.
 * @example
 * ```typescript
 * fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
 * fromCamelCase('someLabelThatNeedsToBeDecamelized', '-');
 * // 'some-label-that-needs-to-be-decamelized'
 * fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
 * fromCamelCase('JSONToCSV', '.'); // 'json.to.csv'
 * ```
 * @category String
 * @public
 * @since 0.1.1
 */
const fromCamelCase = (str: string, separator: string = "_"): string =>
  str
    .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
    .toLowerCase();

export default fromCamelCase;
