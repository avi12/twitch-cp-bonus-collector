/**
 * @type {import('prettier').Options}
 */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: ["^@plasmohq/(.*)$", "^~(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
