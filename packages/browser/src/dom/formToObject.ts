/**
 * Encodes a set of form elements as an `object`.
 * @param form - The form element
 * @returns An object representing the form values.
 * @public
 * @example
 * ```typescript
 * formToObject(document.querySelector('#form'));
 * // { email: 'test@email.com', name: 'Test Name' }
 * ```
 * @since 0.1.5
 * @category DOM
 */
const formToObject = (form: HTMLFormElement) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

export default formToObject;
