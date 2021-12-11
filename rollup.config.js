import { terser } from "rollup-plugin-terser";

const isProduction = !process.env.ROLLUP_WATCH;

function createConfig(filename) {
  return {
    input: `src/${filename}.js`,
    output: {
      format: "cjs",
      file: `dist/build/${filename}.js`
    },
    plugins: [isProduction && terser()],
    watch: {
      clearScreen: true
    }
  };
}

export default [
  createConfig("scripts/content-script-twitch")
];
