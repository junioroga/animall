# React Native Animall App

This is a React Native App to show information about Animes and Mangas. The data are fetch from [AnimeList API](https://myanimelist.net/apiconfig/references/api/v2).

* Dark and Light theme
* EN-US and PT-BR language

![FINISHED MVP](https://img.shields.io/badge/FINISHED-RELEASE%20MVP-lightgreen?style=flat-square)

![DEVELOPING](https://img.shields.io/badge/DEVELOPING-IMPROVING%20WEB-lightblue?style=flat-square)

Project created with Expo CLI. [See official docs](https://docs.expo.dev/get-started/create-a-project) to set up the environment.

## 🛠 Used Technologies

The following tools were used to build the project:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tamagui](https://www.tamagui.dev/): Style and UI for React (web and native) meet an optimizing compiler
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/): React Native Reanimated is a powerful animation library built by Software Mansion.
- [React Navigation](https://reactnavigation.org/docs/getting-started/): Routes and navigation
- [Axios](https://axios-http.com/ptbr/docs/intro): Promise based HTTP client
- [React Query](https://tanstack.com/query/v3/): Fetching, caching, synchronizing and updating server state
- [Legend-state](https://legendapp.com/open-source/state/): Control all application states instead of using react native's useState
- [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/): A library that provides an asynchronous, unencrypted, persistent, key-value storage API.
- [React Content Loader](https://github.com/danilowoz/react-content-loader): A SVG-Powered component to easily create placeholder loadings (like Facebook's cards loading).
- [Jest](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [MSW](https://mswjs.io/): Mock Service Worker is an API mocking library that allows you to write client-agnostic mocks and reuse them across any frameworks, tools, and environments.
- [Maestro](https://maestro.mobile.dev/): Maestro is the simplest and most effective mobile UI testing framework.

## 🚀 Open and run the project

First you need to install the native packages and dependencies.

```
yarn rebuild
```

Run on IOS

```
yarn ios
```

Run on Android

```
yarn android
```

Run on Web

First you need run:

```
yarn cors 
```
* The api I used didn't have CORS, so I needed to use a workaround to work on the web.

After, you can run:
```
yarn web 
```

Run automatized tests with Maestro

First you need to install the maestro CLI:
[Maestro](https://maestro.mobile.dev/getting-started/installing-maestro)

Second you need to run the application.
```
yarn ios OR yarn android 
```

Finally, you can run the tests:
```
maestro test ./test/e2e/main.yml
```

Run on Tests with Jest

```
yarn test
```

Run on Lint to identify problems

```
yarn lint
```

Run on Lint to identify and fix the problems

```
yarn lint:fix
```

Run TypeScript validator to identify invalid types

```
yarn typecheck
```

## Environment variables

To run this project, you will need to add the following environment variables to your .env

`EXPO_PUBLIC_API_TOKEN`

## Getting api key

You can easily get your key for free on the website
[AnimeList API](https://myanimelist.net/apiconfig/references/api/v2)
Just register, click on your profile -> account settings -> API menu

<a href="https://github.com/junioroga/animall/blob/main/assets/readme/api.png" target="_blank">
  <img src="/assets/readme/api.png" width="70%" height="70%"/>
</a>



## Web 

### Dark
<a href="https://github.com/junioroga/animall/blob/main/assets/readme/web_dark.png" target="_blank">
  <img src="/assets/readme/web_dark.png" width="70%" height="70%"/>
</a>

### Light

<a href="https://github.com/junioroga/animall/blob/main/assets/readme/web_light.png" target="_blank">
  <img src="/assets/readme/web_light.png" width="70%" height="70%"/>
</a>

## IOS

### Dark

<img src="/assets/readme/ios_dark.png" width="50%" height="50%"/>

### Light

<img src="/assets/readme/ios_light.png" width="50%" height="50%"/>

## Android

### Dark

<img src="/assets/readme/aos_dark.png" width="50%" height="50%"/>

### Light

<img src="/assets/readme/aos_light.png" width="50%" height="50%"/>