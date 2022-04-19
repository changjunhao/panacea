/**
 * Device supports touch events
 * @example
 * ```typescript
 * supportsTouchEvents(); // true
 * ```
 * @returns boolean
 * @category BOM
 * @since 0.1.0
 * @public
 */
const supportsTouchEvents = () => window && "ontouchstart" in window;

export default supportsTouchEvents;
