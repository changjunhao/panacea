/**
 * Returns an array of HTML elements whose width is larger than that of the viewport's.
 * @example
 * ```typescript
 * getElementsBiggerThanViewport(); // <div id="ultra-wide-item" />
 * ```
 * @since 0.1.4
 * @category DOM
 * @public
 */
const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth;
  return [...document.querySelectorAll("*")].filter(
    (el) => (el as HTMLElement).offsetWidth > docWidth
  );
};

export default getElementsBiggerThanViewport;
