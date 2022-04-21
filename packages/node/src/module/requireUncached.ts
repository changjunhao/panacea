/**
 * Loads a module after removing it from the cache (if exists).
 * @param module - The module to load.
 * @returns The loaded module.
 * @throws An error if the module is not valid or cannot be loaded.
 * @example
 * ```typescript
 * const fs = requireUncached('fs'); // 'fs' will be loaded fresh every time
 * ```
 * @category Module
 * @since 0.1.0
 * @public
 */
const requireUncached = (module: string) => {
  delete require.cache[require.resolve(module)];
  // eslint-disable-next-line global-require,import/no-dynamic-require
  return require(module);
};

export default requireUncached;
