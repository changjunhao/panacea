/**
 * Detaches an event listener from all the provided targets.
 * @param targets - The targets from which to remove the event listener.
 * @param type - The type of event.
 * @param listener - The listener.
 * @param options - The options.
 * @example
 * ```typescript
 * const linkListener = () => console.log('Clicked a link');
 * document.querySelector('a').addEventListener('click', linkListener);
 * removeEventListenerAll(document.querySelectorAll('a'), 'click', linkListener);
 * ```
 * @public
 * @since 0.1.5
 * @category DOM
 */
const removeEventListenerAll = (
  targets: EventTarget[],
  type: string,
  listener: EventListenerOrEventListenerObject | null,
  options?: EventListenerOptions | boolean
) => {
  targets.forEach((target) =>
    target.removeEventListener(type, listener, options)
  );
};

export default removeEventListenerAll;
