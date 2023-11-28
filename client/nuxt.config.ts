// https://nuxt.com/docs/api/configuration/nuxt-config

import { sharedConfig } from "../server/shared.config";

export default defineNuxtConfig({
  modules: ["@nuxt/devtools", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  serverDir: "../server",
  nitro: sharedConfig,
});
