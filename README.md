# Twitch Channel Points Bonus Collector
A browser extension to make Twitch users' life easier to get some good Channel Points.  
Available for [Google Chrome](https://chrome.google.com/webstore/detail/kbbdnbaghpcjpdhbjbccadodjejlkkgg), [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/twitch-cp-bonus-collector), [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/igneodbpmkniacbglbpphcbnimpelkec), and [Opera](https://addons.opera.com/en/extensions/details/twitch-channel-points-bonus-collector).  
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

## Build & pack
```shell
pnpm build
```
## Pack source code
```shell
pnpm pack-self
```
## Do you want to contribute?
Feel free to!  
If you want to fork, just make sure to credit me and link this repository and [my website](https://avi12.com).