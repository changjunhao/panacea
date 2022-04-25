/** @public */
function on<K extends keyof HTMLElementEventMap>(
  el: HTMLElement,
  evt: K,
  fn: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  opts?: {
    options?: AddEventListenerOptions | boolean;
    target?: string;
  }
): (e: HTMLElementEventMap[K]) => void;
/** @public */
function on<K extends keyof WindowEventMap>(
  el: Window,
  evt: K,
  fn: (this: Window, ev: WindowEventMap[K]) => any,
  opts?: {
    options?: AddEventListenerOptions | boolean;
    target?: string;
  }
): (e: WindowEventMap[K]) => void;
/**
 * Adds an event listener to an element with the ability to use event delegation.
 * @param el - The element to add the event listener to.
 * @param evt - The event to listen for.
 * @param fn - The function to run when the event is triggered.
 * @param opts - The options to use when binding the event listener.
 * @returns The function to remove the event listener from the element.
 * @public
 * @example
 * ```typescript
 * const fn = () => console.log('!');
 * on(document.body, 'click', fn); // logs '!' upon clicking the body
 * on(document.body, 'click', fn, { target: 'p' });
 * // logs '!' upon clicking a `p` element child of the body
 * on(document.body, 'click', fn, { options: true });
 * // use capturing instead of bubbling
 * ```
 * @since 0.1.2
 * @category DOM
 */
function on(
  el: HTMLElement | Window,
  evt: string,
  fn: (evt: Event) => any,
  opts?: {
    options?: AddEventListenerOptions | boolean;
    target?: string;
  }
): (e: Event) => void {
  const delegatorFn = (e: Event) =>
    (e.target as Element).matches(opts!.target!) &&
    fn.call(e.target as Element, e);
  el.addEventListener(
    evt,
    opts?.target ? delegatorFn : fn,
    opts?.options || false
  );
  if (opts?.target) return delegatorFn;
  return fn;
}

export default on;
