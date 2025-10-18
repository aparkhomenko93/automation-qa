import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
      files: ["**/*.{js,mjs,cjs}"],
      plugins: { js },
      extends: ["js/recommended"],
      rules: {
          "semi": ["error", "always"],
          "quotes": ["error", "double"],
          "no-trailing-spaces": "warn",
          "no-setter-return": "off"
      },
      languageOptions: { globals: globals.browser }
  },
]);
