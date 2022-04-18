/**
 * Clones a regular expression.
 * @category Type
 * @param regExp - The regular expression to clone.
 * @returns The cloned regular expression.
 * @example
 * ```typescript
 * const regExp = /lorem ipsum/gi;
 * const regExp2 = cloneRegExp(regExp); // regExp !== regExp2
 * ```
 * @public
 */
const cloneRegExp: (regExp: RegExp) => RegExp = (regExp) =>
  new RegExp(regExp.source, regExp.flags);

export default cloneRegExp;
