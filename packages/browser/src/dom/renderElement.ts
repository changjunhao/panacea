/**
 * Renders the given DOM tree in the specified DOM element.
 * @param type - The type of DOM tree to render.
 * @param props - The properties of the DOM tree to render.
 * @param container - The DOM element to render into.
 * @example
 * ```typescript
 * const myElement = {
 *   type: 'button',
 *   props: {
 *     type: 'button',
 *     className: 'btn',
 *     onClick: () => alert('Clicked'),
 *     children: [{ props: { nodeValue: 'Click me' } }]
 *   }
 * };
 *
 * renderElement(myElement, document.body);
 * ```
 * @public
 * @category DOM
 * @since 0.1.6
 */
const renderElement = (
  { type, props = {} }: { type?: string; props?: Record<string, any> },
  container: Node
) => {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode("")
    : document.createElement(type);

  const isListener = (p: string) => p.startsWith("on");
  const isAttribute = (p: string) => !isListener(p) && p !== "children";

  Object.keys(props).forEach((p) => {
    if (isAttribute(p)) {
      // @ts-ignore
      element[p] = props[p];
    }
    if (!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });

  if (!isTextElement && props.children && props.children.length)
    props.children.forEach(
      (childElement: { type: string; props: Record<string, any> }) =>
        renderElement(childElement, element)
    );

  container.appendChild(element);
};

export default renderElement;
