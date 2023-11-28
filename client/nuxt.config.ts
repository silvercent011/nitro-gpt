// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/devtools"],
  devtools: { enabled: true },
  serverDir: "../server",
});
