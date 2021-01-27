import { terser } from "rollup-plugin-terser";

const isProduction = !process.env.ROLLUP_WATCH;

function createConfig(filename) {
  return {
    input: `src/${filename}.js`,
    output: {
      format: "esm",
      file: `dist/build/${filename}.js`
    },
    plugins: [isProduction && terser()],
    watch: {
      clearScreen: false
    }
  };
}

export default [
  createConfig("content-script-twitch"),
];
