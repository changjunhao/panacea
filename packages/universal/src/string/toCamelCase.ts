/**
 * Converts a string to camelcase.
 * @param str - String to convert.
 * @returns Camelcased string.
 * @example
 * ```ts
 * toCamelCase('Foo Bar'); // 'fooBar'
 * toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
 * toCamelCase('Some label that needs to be camelized');
 * // 'someLabelThatNeedsToBeCamelized'
 * toCamelCase('some-javascript-property'); // 'someJavascriptProperty'
 * toCamelCase('some-mixed_string with spaces_underscores-and-hyphens');
 * // 'someMixedStringWithSpacesUnderscoresAndHyphens'
 * ```
 * @since 0.1.16
 * @category String
 * @public
 */
const toCamelCase = (str: string) => {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  return s ? s.slice(0, 1).toLowerCase() + s.slice(1) : str;
};

export default toCamelCase;
