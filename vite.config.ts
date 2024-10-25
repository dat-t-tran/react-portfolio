import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      enabled: true,
      exclude: [
        ...configDefaults.exclude,
        "**/{postcss,tailwind}.config.*",
        "**/*.d.ts",
        "**/*.types.*",
        "**/index.ts",
        "**/coverage/**",
        "**/__tests__/**",
        "**/__mocks__/**",
      ],
    },
  },
});
