/**
 * Redirects to a specified URL.
 * @param url - The URL to redirect to.
 * @param asLink - Whether to attempt to create a link to the URL.
 * @example
 * ```typescript
 * redirect('https://google.com');
 * ```
 * @since 0.1.1
 * @category BOM
 * @public
 */
const redirect = (url: string, asLink: boolean = true) => {
  if (asLink) {
    window.location.href = url;
  } else {
    window.location.replace(url);
  }
};

export default redirect;
