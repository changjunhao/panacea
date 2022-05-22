/**
 * Converts a string to pascal case.
 * @param str - The string to convert.
 * @returns The string in pascal case.
 * @example
 * ```ts
 * toPascalCase("foo-bar") // "FooBar"
 * toPascalCase('some_database_field_name'); // 'SomeDatabaseFieldName'
 * toPascalCase('Some label that needs to be pascalized');
 * // 'SomeLabelThatNeedsToBePascalized'
 * toPascalCase('some-javascript-property'); // 'SomeJavascriptProperty'
 * toPascalCase('some-mixed_string with spaces_underscores-and-hyphens');
 * // 'SomeMixedStringWithSpacesUnderscoresAndHyphens'
 * ```
 * @category String
 * @public
 * @since 0.1.16
 */
const toPascalCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join("");

export default toPascalCase;
