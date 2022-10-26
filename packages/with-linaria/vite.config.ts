import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import linaria from "@linaria/rollup";
import css from "rollup-plugin-css-only";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    linaria({
      sourceMap: process.env.NODE_ENV !== "production",
    }),
    css({
      output: "styles.css",
    }),
  ],
});
