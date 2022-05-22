/**
 * Converts a string to title case.
 * @param str - The string to convert.
 * @returns The converted string.
 * @example
 * ```ts
 * toTitleCase('some_database_field_name'); // 'Some Database Field Name'
 * toTitleCase('Some label that needs to be title-cased');
 * // 'Some Label That Needs To Be Title Cased'
 * toTitleCase('some-package-name'); // 'Some Package Name'
 * toTitleCase('some-mixed_string with spaces_underscores-and-hyphens');
 * // 'Some Mixed String With Spaces Underscores And Hyphens'
 * ```
 * @category String
 * @public
 * @since 0.1.16
 */
const toTitleCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");

export default toTitleCase;
