/**
 * Adds multiple event listeners with the same handler to an element.
 * @param el - Element to add listeners to.
 * @param types - Types of events to add.
 * @param listener - Event listener.
 * @param options - Event listener options.
 * @example
 * ```typescript
 * addMultipleListeners(
 *   document.querySelector('.my-element'),
 *   ['click', 'mousedown'],
 *   () => { console.log('hello!') }
 * );
 * ```
 * @public
 * @since 0.1.6
 * @category DOM
 */
const addMultipleListeners = (
  el: EventTarget,
  types: string[],
  listener: EventListenerOrEventListenerObject | null,
  options?: EventListenerOptions | boolean
) => {
  types.forEach((type) => el.addEventListener(type, listener, options));
};

export default addMultipleListeners;
