import eslint from "@eslint/js";
import avi12 from "eslint-config-avi12";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...avi12,
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      parser: tsEslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        chrome: true
      }
    }
  }
];
