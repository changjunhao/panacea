/**
 * Converts a string to snake case.
 * @param str - The string to convert.
 * @returns The snake cased string.
 * @example
 * ```ts
 * toSnakeCase('FooBar') // 'foo_bar'
 * toSnakeCase('camelCase'); // 'camel_case'
 * toSnakeCase('some text'); // 'some_text'
 * toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens');
 * // 'some_mixed_string_with_spaces_underscores_and_hyphens'
 * toSnakeCase('AllThe-small Things'); // 'all_the_small_things'
 * toSnakeCase('IAmEditingSomeXMLAndHTML');
 * // 'i_am_editing_some_xml_and_html'
 * ```
 * @category String
 * @public
 * @since 0.1.16
 */
const toSnakeCase = (str: string) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("_");

export default toSnakeCase;
