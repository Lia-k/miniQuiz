import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

const reactFlatConfig = react.configs.flat.recommended;
const reactJsxRuntimeConfig = react.configs.flat["jsx-runtime"];
const reactHooksConfig = reactHooks.configs["recommended-latest"];
const reactRefreshConfig = reactRefresh.configs.vite;

const combinedReactPlugins = {
  ...reactFlatConfig.plugins,
  ...reactJsxRuntimeConfig.plugins,
};

const combinedReactLanguageOptions = {
  ...reactFlatConfig.languageOptions,
  ...reactJsxRuntimeConfig.languageOptions,
};

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...reactFlatConfig,
    plugins: {
      ...combinedReactPlugins,
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ...combinedReactLanguageOptions,
      parser: tsParser,
      ecmaVersion: "latest",
      globals: {
        ...combinedReactLanguageOptions?.globals,
        ...globals.browser,
      },
      parserOptions: {
        ...combinedReactLanguageOptions?.parserOptions,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactFlatConfig.rules,
      ...reactJsxRuntimeConfig.rules,
      ...reactHooksConfig.rules,
      ...reactRefreshConfig.rules,
      ...tseslint.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
