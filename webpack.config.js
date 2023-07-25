const { TamaguiPlugin } = require('tamagui-loader');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development';
const target = 'web';
const isDev = NODE_ENV === 'development';

const boolValues = {
  true: true,
  false: false,
};
const disableExtraction = boolValues[process.env.DISABLE_EXTRACTION] ?? NODE_ENV === 'development';

const tamaguiOptions = {
  config: './tamagui.config.ts',
  components: ['tamagui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  disableExtraction,
};

const projectRoot = __dirname;

module.exports = {
  context: projectRoot,
  stats: 'normal', // 'detailed'
  mode: NODE_ENV,
  entry: ['./index.web.tsx'],
  devtool: isDev ? 'eval' : '',
  optimization: {
    concatenateModules: false,
    minimize: false,
  },
  resolve: {
    mainFields: ['module:jsx', 'browser', 'module', 'main'],
    alias: {
      'react-native$': 'react-native-web-lite',
      'react-native-web$': 'react-native-web-lite',
      'react-native-svg': require.resolve('@tamagui/react-native-svg'),
    },
  },
  devServer: {
    client: {
      overlay: false,
      logging: 'warn',
    },
    historyApiFallback: true,
    hot: true,
    compress: true,
    open: true,
    port: 19006,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es2020',
              loader: 'tsx',
              minify: false,
            },
          },
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new TamaguiPlugin(tamaguiOptions),
    new DefinePlugin({
      process: {
        env: {
          IS_STATIC: '""',
          NODE_ENV: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === 'development' ? 'true' : 'false',
          TAMAGUI_TARGET: JSON.stringify(target),
          DEBUG: JSON.stringify(process.env.DEBUG || '0'),
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: `./index.html`,
    }),
  ],
};
