import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// GitHub Pages has no SPA fallback, so emit a copy of index.html as
// <route>.html for each client-side route (served with 200 at /<route>) and as 404.html for everything else.
const spaRoutes = ["publications", "background"];

const spaFallback = (): Plugin => ({
  name: "spa-fallback",
  apply: "build",
  closeBundle() {
    const dist = path.resolve(__dirname, "dist");
    const index = path.join(dist, "index.html");
    fs.copyFileSync(index, path.join(dist, "404.html"));
    for (const route of spaRoutes) {
      fs.copyFileSync(index, path.join(dist, `${route}.html`));
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    spaFallback(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
