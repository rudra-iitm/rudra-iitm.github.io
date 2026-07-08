import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      server: {
        preset: "github-pages",
      },
      prerender: {
        enabled: true,
        routes: ["/"],
        crawlLinks: true,
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: true,
  },
});
