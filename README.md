# Twitch Channel Points Bonus Collector

A browser extension to make Twitch users' life easier to get some good ![Channel Points](https://github.com/avi12/twitch-cp-bonus-collector/blob/main/images/icons/Normal%20icon-16.png?raw=true)  
Available for:

- [Google Chrome](https://chrome.google.com/webstore/detail/kbbdnbaghpcjpdhbjbccadodjejlkkgg) ![Chrome Web Store](https://img.shields.io/chrome-web-store/users/kbbdnbaghpcjpdhbjbccadodjejlkkgg?color=white&label=users&style=flat-square)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/twitch-cp-bonus-collector) ![Mozilla Add-on](https://img.shields.io/amo/users/twitch-cp-bonus-collector?color=white&label=users&style=flat-square)
- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/igneodbpmkniacbglbpphcbnimpelkec) ![users count](https://img.shields.io/badge/dynamic/json?label=users&query=activeInstallCount&style=flat-square&color=white&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/igneodbpmkniacbglbpphcbnimpelkec)
- [Opera](https://addons.opera.com/en/extensions/details/twitch-channel-points-bonus-collector)

Made by [avi12](https://avi12.com).

## Requirements for setting up

Install [Node.js](https://nodejs.org) and [PNPM](https://pnpm.js.org/en/installation).

## Install dependencies

```shell script
pnpm i
```

## Start Rollup for development

```shell script
pnpm dev
```

## Running

### Chromium/Chrome

```shell script
pnpm run-chromium
```

### Edge on Windows 10/11

```shell
pnpm run-edge-windows
```

### Browsers that don't support Manifest v3

1. Build the extension for Firefox/Opera (see below).
2. Open the extensions page in your browser.
3. Enable the developer mode (top-right corner usually).
4. Either drag-drop the browser-compatible ZIP onto the browser or click "Load unpacked extension" and choose it.

## Build & pack

```shell
pnpm build-pack
```

### Build for Firefox (run `pnpm build-pack` first)

```shell
pnpm build-for-firefox
```

### Build for Opera (run `pnpm build-pack` first)

```shell
pnpm build-for-opera
```

## Do you want to contribute?

Feel free to! Make sure to comply with the license, [GPL v3](https://github.com/avi12/twitch-cp-bonus-collector/blob/main/LICENSE).
