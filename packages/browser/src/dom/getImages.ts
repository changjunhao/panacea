/**
 * Fetches all images from within an element and puts them into an array.
 * @param el - Element to search for images.
 * @param includeDuplicates - Whether to include duplicate images or not.
 * @returns An array of all images in the element.
 * @public
 * @example
 * ```typescript
 * getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
 * getImages(document, false); // ['image1.jpg', 'image2.png', '...']
 * ```
 * @since 0.1.4
 * @category DOM
 */
const getImages = (
  el: HTMLElement,
  includeDuplicates: boolean = false
): (string | null)[] => {
  const images = [...el.getElementsByTagName("img")].map((img) =>
    img.getAttribute("src")
  );
  return includeDuplicates ? images : [...new Set(images)];
};

export default getImages;
