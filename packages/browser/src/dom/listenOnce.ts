/** @public */
function listenOnce<T extends keyof HTMLElementEventMap>(
  el: HTMLElement,
  evt: T,
  fn: (this: HTMLElement, evt: HTMLElementEventMap[T]) => any
): void;
/** @public */
function listenOnce<K extends keyof WindowEventMap>(
  el: Window,
  evt: K,
  fn: (this: Window, ev: WindowEventMap[K]) => any
): void;
/**
 * Adds an event listener to an element that will only run the callback the first time the event is triggered.
 * @param el - The element to add the event listener to.
 * @param evt - The event to listen for.
 * @param fn - The callback to run when the event is triggered.
 * @example
 * ```typescript
 * listenOnce(
 *   document.getElementById('my-id'),
 *   'click',
 *   () => console.log('Hello world')
 * ); // 'Hello world' will only be logged on the first click
 * ```
 * @public
 * @category DOM
 * @since 0.1.2
 */
function listenOnce(
  el: HTMLElement | Window,
  evt: string,
  fn: (this: HTMLElement | Window, ev: Event) => any
): void {
  el.addEventListener(evt, fn, { once: true });
}

export default listenOnce;
