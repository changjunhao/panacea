/**
 * Triggers a specific event on a given element, optionally passing custom data.
 * @param el - Element to trigger the event on.
 * @param eventType - Name of the event to trigger.
 * @param detail - Optional data to pass as `detail` to the event.
 * @returns `true` if the event was successfully triggered.
 * @example
 * ```typescript
 * triggerEvent(document.getElementById('myId'), 'click');
 * triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });
 * ```
 * @since 0.1.2
 * @category DOM
 * @public
 */
function triggerEvent<T>(el: Element, eventType: string, detail?: T) {
  return el.dispatchEvent(new CustomEvent(eventType, { detail }));
}

export default triggerEvent;
