import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import clear from "rollup-plugin-clear";

const shareConfig = {
  input: "src/index.ts",
  external: [/@babel\/runtime/],
  plugins: [
    clear({
      targets: ["lib", "esm"],
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
};

export default [
  {
    ...shareConfig,
    plugins: [
      ...shareConfig.plugins,
      typescript({
        outDir: "esm",
      }),
      babel({
        babelHelpers: "runtime",
        extensions: [".ts"],
      }),
    ],
    output: [
      {
        dir: "esm",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        exports: "auto",
      },
    ],
  },
  {
    ...shareConfig,
    plugins: [
      ...shareConfig.plugins,
      typescript({
        outDir: "lib",
      }),
      babel({
        babelHelpers: "runtime",
        extensions: [".ts"],
      }),
    ],
    output: [
      {
        dir: "lib",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        exports: "auto",
      },
    ],
  },
];
