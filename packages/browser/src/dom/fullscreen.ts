/**
 * Opens or closes an element in fullscreen mode.
 * @param mode - The mode to open the element in.
 * @param el - The element to open in fullscreen mode.
 * @example
 * ```typescript
 * fullscreen(); // Opens `body` in fullscreen mode
 * fullscreen(false); // Exits fullscreen mode
 * ```
 * @since 0.1.0
 * @category DOM
 * @public
 */
const fullscreen = (mode: boolean = true, el: string = "body"): Promise<void> =>
  mode
    ? document.querySelector(el)!.requestFullscreen()
    : document.exitFullscreen();

export default fullscreen;
