/**
 * Gets the command-line arguments passed to a Node.js script.
 * @returns a string array containing the command-line arguments
 * @example
 * ```typescript
 * // node my-script.js --name=John --age=30
 * getCmdArgs(); // ['--name=John', '--age=30']
 * ```
 * @public
 * @since 0.1.2
 * @category Process
 */
const getCmdArgs = () => process.argv.slice(2);

export default getCmdArgs;
