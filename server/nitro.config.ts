export default defineNitroConfig({
  experimental: {
    openAPI: true,
  },
  storage: {
    db: {
      driver: "fsLite",
      base: "./db",
    },
  },
});
