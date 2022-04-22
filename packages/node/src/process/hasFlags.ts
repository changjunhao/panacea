/**
 * Checks if the current process's arguments contain the specified flags.
 * @param flags - The flags to check for.
 * @returns `true` if the flag is contained in the arguments, `false` otherwise.
 * @example
 * ```typescript
 * // node myScript.js -s --test --cool=true
 * hasFlags('-s'); // true
 * hasFlags('--test', 'cool=true', '-s'); // true
 * hasFlags('special'); // false
 * ```
 * @since 0.1.0
 * @category Process
 * @public
 */
const hasFlags = (...flags: string[]): boolean =>
  flags.every((flag) =>
    process.argv.includes(/^-{1,2}/.test(flag) ? flag : `--${flag}`)
  );

export default hasFlags;
