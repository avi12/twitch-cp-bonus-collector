# Twitch Channel Points Bonus Collector

A browser extension to make Twitch users' life easier to get some
good ![Channel Points](https://user-images.githubusercontent.com/6422804/192149173-027f0941-cf4a-4fe3-b2cb-cbb3beb57a3c.png)  
Available for:

- [Google Chrome](https://chrome.google.com/webstore/detail/kbbdnbaghpcjpdhbjbccadodjejlkkgg) ![Chrome Web Store](https://img.shields.io/chrome-web-store/users/kbbdnbaghpcjpdhbjbccadodjejlkkgg?color=white&label=users&style=flat-square)
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/twitch-cp-bonus-collector)
  109+ ![Mozilla Add-on](https://img.shields.io/amo/users/twitch-cp-bonus-collector?color=white&label=users&style=flat-square)
- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/igneodbpmkniacbglbpphcbnimpelkec) ![users count](https://img.shields.io/badge/dynamic/json?label=users&query=activeInstallCount&style=flat-square&color=white&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/igneodbpmkniacbglbpphcbnimpelkec)
- [Opera](https://addons.opera.com/en/extensions/details/twitch-channel-points-bonus-collector)

Made by [Avi](https://avi12.com)

## Requirements for setting up

Install [Node.js](https://nodejs.org) and [PNPM](https://pnpm.io/installation)

## Install dependencies

```shell script
pnpm i
```

## Start the dev server & run in a test browser

### Chrome

```shell
pnpm dev
```

### Edge

```shell
pnpm dev:edge
```

### Opera

```shell
pnpm dev:opera
```

### Firefox

Currently [unsupported](https://github.com/wxt-dev/wxt/issues/230#issuecomment-1806881653)

## Build & package

### Chromium/Chrome

```shell
pnpm build:package
```

### Opera

```shell
pnpm build:package:opera
```

### Firefox

```shell
pnpm build:package:firefox
```

## Contribution

Feel free to! Make sure to comply with the
license, [GPL v3](https://github.com/avi12/twitch-cp-bonus-collector/blob/main/LICENSE)  
If you want to fork, make sure to credit [Avi](https://avi12.com) and link to this repository
