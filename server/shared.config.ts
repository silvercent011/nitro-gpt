import { NitroConfig } from "nitropack";

export const sharedConfig = {
  experimental: {
    openAPI: true,
  },
  storage: {
    db: {
      driver: "fsLite",
      base: "./db",
    },
  },
} satisfies NitroConfig;
