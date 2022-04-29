/**
 * Attaches an event listener to all the provided targets.
 * @param targets - The targets to add the event listener to.
 * @param type - The type of event.
 * @param listener - The listener.
 * @param options - The options.
 * @example
 * ```typescript
 * addEventListenerAll(document.querySelectorAll('a'), 'click', () =>
 *   console.log('Clicked a link')
 * );
 * // Logs 'Clicked a link' whenever any anchor element is clicked
 * ```
 * @public
 * @since 0.1.5
 * @category DOM
 */
const addEventListenerAll = (
  targets: EventTarget[],
  type: string,
  listener: EventListenerOrEventListenerObject | null,
  options?: EventListenerOptions | boolean
) => {
  targets.forEach((target) => target.addEventListener(type, listener, options));
};

export default addEventListenerAll;
