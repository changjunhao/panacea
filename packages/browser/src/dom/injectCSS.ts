/**
 * Injects the given CSS code into the current document
 * @param css - The CSS code to inject
 * @returns The created style element
 * @public
 * @example
 * ```typescript
 * injectCSS('body { background-color: #000 }');
 * // '<style>body { background-color: #000 }</style>'
 * ```
 * @since 0.1.2
 * @category DOM
 */
const injectCSS = (css: string) => {
  const el = document.createElement("style");
  // el.type = 'text/css';
  el.appendChild(document.createTextNode(css));
  document.head.appendChild(el);
  return el;
};

export default injectCSS;
