/**
 * Gets the protocol being used on the current page.
 * @example
 * ```typescript
 * getProtocol(); // 'https:'
 * ```
 * @category BOM
 * @since 0.1.0
 * @public
 */
const getProtocol = (): string => window.location.protocol;

export default getProtocol;
