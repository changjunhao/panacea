/**
 * Redirects the page to HTTPS if it's currently in HTTP.
 * @example
 * ```typescript
 * httpsRedirect();
 * // If you are on http://mydomain.com, you are redirected to https://mydomain.
 * ```
 * @public
 * @since 0.1.3
 * @category BOM
 */
const httpsRedirect = () => {
  if (window.location.protocol !== "https:")
    window.location.replace(`https://${window.location.href.split("//")[1]}`);
};

export default httpsRedirect;
