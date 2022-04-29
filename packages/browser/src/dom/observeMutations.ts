/**
 * Creates a new `MutationObserver` and runs the provided callback for each mutation on the specified element.
 * @param element - Element to observe.
 * @param callback - Callback to run for each mutation.
 * @param options - Options for the observer.
 * @returns The new `MutationObserver` instance.
 * @public
 * @example
 * ```typescript
 * const obs = observeMutations(document, console.log);
 * // Logs all mutations that happen on the page
 * obs.disconnect();
 * // Disconnects the observer and stops logging mutations on the page
 * ```
 * @since 0.1.5
 * @category DOM
 */
const observeMutations = (
  element: Node,
  callback: (mutation: MutationRecord) => void,
  options?: MutationObserverInit
) => {
  const observer = new MutationObserver((mutations) =>
    mutations.forEach((m) => callback(m))
  );
  observer.observe(element, {
    childList: true,
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true,
    ...options,
  });
  return observer;
};

export default observeMutations;
