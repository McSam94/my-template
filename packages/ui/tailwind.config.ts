// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "@mcsam/config/tailwind.config.ts";

const config: Pick<Config, "prefix" | "presets"> = {
  presets: [sharedConfig],
};

export default config;
