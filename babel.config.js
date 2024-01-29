module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      [
        '@tamagui/babel-plugin',
        {
          platform: 'native',
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
