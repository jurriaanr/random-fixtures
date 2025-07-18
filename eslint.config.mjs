import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = path.join(__dirname, ".gitignore");

// Base shared configuration that can be extended by package-specific configs
export const baseConfig = [
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      quotes: ["error", "single", { avoidEscape: true }],
    },
  },
];
export default defineConfig(baseConfig);
