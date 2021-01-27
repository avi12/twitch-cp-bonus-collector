# Twitch Channel Points Bonus Collector
A browser extension to make Twitch users' life easier to get some good ![Channel Points](https://github.com/avi12/twitch-cp-bonus-collector/blob/main/images/icons/Normal%20icon-16.png?raw=true)  
Available for:
* [Google Chrome](https://chrome.google.com/webstore/detail/kbbdnbaghpcjpdhbjbccadodjejlkkgg) ![Chrome Web Store](https://img.shields.io/chrome-web-store/users/kbbdnbaghpcjpdhbjbccadodjejlkkgg?color=white&label=users&style=flat-square)
* [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/twitch-cp-bonus-collector) ![Mozilla Add-on](https://img.shields.io/amo/users/twitch-cp-bonus-collector?color=white&label=users&style=flat-square)
* [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/igneodbpmkniacbglbpphcbnimpelkec)
* [Opera](https://addons.opera.com/en/extensions/details/twitch-channel-points-bonus-collector)

Made by [avi12](https://avi12.com).

## Requirements for setting up
Install [Node.js](https://nodejs.org) and [PNPM](https://pnpm.js.org/en/installation).

## Install dependencies
```shell
pnpm i
```

## Start Rollup for development
```shell
pnpm dev
```

## Running
### Chrome/Chromium
```shell
pnpm run-chromium
```

### Firefox
```shell
pnpm run-firefox
```

### Other browsers
1. Open the extensions page in your browser.
1. Enable the developer tools (top-right corner usually).
1. Either drag-drop the `dist` folder onto the browser or click "Load unpacked extension" and choose it.

## Build
```shell
pnpm build
```

## Pack
```shell
pnpm run pack
```

## Pack source code
```shell
pnpm pack-self
```

## Shorthand
```shell
pnpm build-pack
```
## Do you want to contribute?
Feel free to!  
If you want to fork, just make sure to credit me and link this repository and [my website](https://avi12.com).