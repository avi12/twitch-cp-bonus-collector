import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

export default [
  ...compat.config({
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      lib: ["dom", "esnext"]
    },
    overrides: [
      {
        files: ["*.svelte"],
        parser: "svelte-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser"
        }
      }
    ],
    rules: {
      "arrow-parens": ["warn", "as-needed"],
      "prefer-const": "warn",
      "no-async-promise-executor": "off",
      semi: ["warn", "always"],
      quotes: [
        "warn",
        "double",
        {
          allowTemplateLiterals: true
        }
      ],
      indent: [
        "warn",
        2,
        {
          SwitchCase: 1
        }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "object-curly-spacing": ["warn", "always"],
      "quote-props": ["warn", "as-needed"],
      "comma-dangle": ["warn", "never"],
      curly: ["warn", "all"],
      "array-element-newline": ["warn", "consistent"],
      "import/order": ["warn", { groups: ["external", "internal"], alphabetize: { order: "asc" } }],
      "object-property-newline": [
        "warn",
        {
          allowMultiplePropertiesPerLine: true
        }
      ]
    },
    env: {
      browser: true,
      es2024: true,
      node: true,
      webextensions: true
    },
    globals: {
      chrome: true
    },
    plugins: ["svelte", "@typescript-eslint", "import"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended"]
  })
];
