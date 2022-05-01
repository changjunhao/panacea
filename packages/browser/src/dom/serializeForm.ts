/**
 * Encodes a set of form elements as a query string.
 * @param form - The form elements to serialize.
 * @returns A query string representing the form.
 * @public
 * @example
 * ```typescript
 * serializeForm(document.querySelector('#form'));
 * // email=test%40email.com&name=Test%20Name
 * ```
 * @since 0.1.6
 * @category DOM
 */
const serializeForm = (form: HTMLFormElement) =>
  Array.from(new FormData(form), (field) =>
    field.map((item) => encodeURIComponent(item as string)).join("=")
  ).join("&");

export default serializeForm;
