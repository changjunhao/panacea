/** @public */
function off<K extends keyof HTMLElementEventMap>(
  el: HTMLElement,
  evt: K,
  handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | EventListenerOptions
): void;
/** @public */
function off<K extends keyof WindowEventMap>(
  el: Window,
  evt: K,
  handler: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | EventListenerOptions
): void;

/**
 * Removes an event listener from an element.
 * @param el - The element to remove the event listener from.
 * @param evt - The event name.
 * @param fn - The event handler.
 * @param opts - The event options.
 * @example
 * ```typescript
 * const fn = () => console.log('!');
 * document.body.addEventListener('click', fn);
 * off(document.body, 'click', fn); // no longer logs '!' upon clicking on the page
 * ```
 * @since 0.1.2
 * @category DOM
 * @public
 */
function off(
  el: HTMLElement | Window,
  evt: string,
  fn: (evt: Event) => any,
  opts?: boolean | EventListenerOptions
) {
  el.removeEventListener(evt, fn, opts);
}

export default off;
