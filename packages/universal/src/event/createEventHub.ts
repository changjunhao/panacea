/**
 * Creates a pub/sub (publish–subscribe) event hub with `emit`, `on`, and `off` methods.
 * @returns EventHub
 * @example
 * ```typescript
 * const handler = data => console.log(data);
 * const hub = createEventHub();
 * let increment = 0;
 *
 * // Subscribe: listen for different types of events
 * hub.on('message', handler);
 * hub.on('message', () => console.log('Message event fired'));
 * hub.on('increment', () => increment++);
 *
 * // Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
 * hub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'
 * hub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'
 * hub.emit('increment'); // `increment` variable is now 1
 *
 * // Unsubscribe: stop a specific handler from listening to the 'message' event
 * hub.off('message', handler);
 * ```
 * @public
 * @category Event
 * @since 0.1.7
 */
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event: string, data?: any) {
    (this.hub[event] || []).forEach((handler: (data: any) => void) =>
      handler(data)
    );
  },
  on(event: string, handler: (data: any) => void) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event: string, handler: (data: any) => void) {
    const i = (this.hub[event] || []).findIndex(
      (h: (data: any) => void) => h === handler
    );
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event]?.length === 0) delete this.hub[event];
  },
});

export default createEventHub;
