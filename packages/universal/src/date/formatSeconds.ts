/**
 * Returns the ISO format of the given number of seconds.
 * @param s - The number of seconds.
 * @returns The ISO format of the given number of seconds.
 * @example
 * ```ts
 * formatSeconds(200); // '00:03:20'
 * formatSeconds(-200); // '-00:03:20'
 * formatSeconds(99999); // '27:46:39'
 * ```
 * @category Date
 * @public
 * @since 0.1.14
 */
const formatSeconds = (s: number) => {
  const [hour, minute, second, sign] =
    s > 0
      ? [s / 3600, (s / 60) % 60, s % 60, ""]
      : [-s / 3600, (-s / 60) % 60, -s % 60, "-"];

  return (
    sign +
    [hour, minute, second]
      .map((v) => `${Math.floor(v)}`.padStart(2, "0"))
      .join(":")
  );
};

export default formatSeconds;
