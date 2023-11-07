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
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@navigators': './src/navigators',
            '@pages': './src/pages',
            '@router': './src/router',
            '@utils': './src/utils',
            '@store': './src/store',
            '@config': './src/config',
            '@services': './src/services',
            '@test': './test',
          },
        },
      ],
    ],
  }
}
