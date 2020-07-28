import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      // file: pkg.main,
      dir: "dist/",
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [typescript()],
  external: ["react-dom", ...Object.keys(pkg.dependencies)]
};
