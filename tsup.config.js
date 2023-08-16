import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  minify: true,
  format: ["esm"],
  outDir: "dist",
  clean: true,
  sourcemap: true,
});
