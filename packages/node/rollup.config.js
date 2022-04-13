import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import clear from "rollup-plugin-clear";

const shareConfig = {
  input: "src/index.ts",
  plugins: [
    clear({
      targets: ["lib", "esm"],
    }),
    resolve(),
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
    ],
    output: [
      {
        dir: "esm",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        exports: "auto",
        entryFileNames: "[name].mjs",
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
    ],
    output: [
      {
        dir: "lib",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        exports: "auto",
        // generatedCode: {
        //   arrowFunctions: true,
        //   constBindings: true,
        //   objectShorthand: true,
        //   preset: 'es2015',
        // }
      },
    ],
  },
];
