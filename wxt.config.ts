import { defineConfig, UserManifest } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  manifest({ browser, manifestVersion }) {
    const url = process.env.npm_package_repository;
    const [, author, email] = process.env.npm_package_author!.match(/(.+) <(.+)>/);
    let manifest: UserManifest = {
      name: "Twitch Channel Points Bonus Collector",
      description: "Auto-clicks the Channel Points bonus button when it appears.",
      homepage_url: url
    };
    if (browser === "opera") {
      manifest.author = process.env.npm_package_author;
    } else if (manifestVersion === 3) {
      manifest.author = { email };
    }
    if (browser === "firefox") {
      manifest = {
        ...manifest,
        browser_specific_settings: {
          gecko: {
            id: "twitch-cp-bonus-collector@avi12.com"
          }
        },
        developer: {
          name: author,
          url
        }
      };
    } else { // if not Firefox
      manifest.offline_enabled = true;
    }
    return manifest;
  },
  outDir: "build",
  zip: {
    excludeSources: ["*.env", ".env*"]
  }
});
