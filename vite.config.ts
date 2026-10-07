import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  base: "/yassine-ferhi.github.io/",
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      server: {
        entry: "server",
      },
      prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        crawlLinks: false,
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
