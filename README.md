# react-native-sample-app

> A sample React Native starter app

Includes:

- Navigation using [`react-navigation`](https://reactnavigation.org)
- Splashscreen support using [`react-native-splash-screen`](https://github.com/crazycodeboy/react-native-splash-screen)
- Common components by [`native-base`](https://www.nativebase.io)
- `i18n` support using [`react-native-languages`](https://github.com/react-community/react-native-languages) and [`i18n-js`](https://github.com/fnando/i18n-js)
- [`sentry.io`](https://sentry.io/welcome/) crash reporting via [`react-native-sentry`](https://github.com/getsentry/react-native-sentry)
- [`redux`](https://redux.js.org) with persistence support via [`redux-persist`](https://github.com/rt2zz/redux-persist/)
- dotEnv support using [`react-native-dotenv`](https://github.com/zetachang/react-native-dotenv)

Also includes

- `React Native Toolbox` tooling integration ([`@panz3r/react-native-toolbox`](https://github.com/panz3r/react-native-toolbox))

## Setup

Clone this repo and run

```sh
yarn install
```

## Commands

### Run on Android

Launch app on Android (either emulator or attached device)

```sh
yarn android
```

### Run on iOS

Launch app on iOS Simulator

```sh
yarn ios
```

Launch app on iOS attached device

```sh
yarn ios:device
```

### Lint code

```sh
yarn lint
```

### Generate app icons

To setup the app icons:

- create an image at least `1024x1024px`
- place it under `/assets` folder as `icon.png`
- run

```sh
yarn assets:icons
```

### Generate Splashscreen

To setup the app splashscreen:

- create an image at least `1242x2208px`
- place it under `/assets` folder as `splashscreen.png`
- run

```sh
yarn assets:splashscreen
```

---

Made with :sparkles: & :heart: by [Mattia Panzeri](https://github.com/panz3r) and [contributors](https://github.com/panz3r/react-native-sample-app/graphs/contributors)
