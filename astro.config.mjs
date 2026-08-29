import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.telio-s.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        return /^\/(en|th)\//.test(url.pathname);
      },
    }),
  ],
});
