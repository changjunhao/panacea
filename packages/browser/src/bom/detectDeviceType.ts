/**
 * Detects whether the page is being viewed on a mobile device or a desktop.
 * @returns 'Mobile' or 'Desktop'
 * @example
 * ```typescript
 * detectDeviceType(); // 'Mobile' or 'Desktop'
 * ```
 * @category BOM
 * @since 0.1.1
 * @public
 */
const detectDeviceType = (): "Mobile" | "Desktop" =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

export default detectDeviceType;
