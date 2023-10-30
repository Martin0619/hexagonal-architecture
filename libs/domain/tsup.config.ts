import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  entry: ["src/index.ts"],
  dts: true,
  minify: !opts.watch,
  format: ["cjs"],
  clean: true,
  sourcemap: true,
}));
