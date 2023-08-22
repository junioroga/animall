const path = require('path')
const { TamaguiPlugin } = require('tamagui-loader');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'development';

const boolValues = {
  true: true,
  false: false,
};
const disableExtraction = boolValues[process.env.DISABLE_EXTRACTION] ?? NODE_ENV === 'development';

const tamaguiOptions = {
  config: './tamagui.config.ts',
  components: ['tamagui'],
  importsWhitelist: ['constants.js'],
  disableExtraction,
};

const projectRoot = __dirname;

module.exports = {
  context: projectRoot,
  stats: 'normal', // 'detailed'
  mode: NODE_ENV,
  entry: ['./index.web.tsx'],
  devtool: isDev ? 'eval' : '',
  resolve: {
    mainFields: ['module:jsx', 'browser', 'module', 'main'],
    alias: {
      'react-native$': 'react-native-web-lite',
      'react-native-web$': 'react-native-web-lite',
      'react-native-svg': require.resolve('@tamagui/react-native-svg'),

      '@assets': path.resolve(projectRoot, '/src/assets'),
      '@components': path.resolve(projectRoot, '/src/components'),
      '@hooks': path.resolve(projectRoot, '/src/hooks'),
      '@navigators': path.resolve(projectRoot, '/src/navigators'),
      '@pages': path.resolve(projectRoot, '/src/pages'),
      '@router': path.resolve(projectRoot, '/src/router'),
      '@utils': path.resolve(projectRoot, '/src/utils'),
      '@store': path.resolve(projectRoot, '/src/store'),
      '@config': path.resolve(projectRoot, '/src/config'),
      '@services': path.resolve(projectRoot, '/src/services'),
      '@test': path.resolve(projectRoot, '/test'),
    },
  },
  devServer: {
    client: {
      overlay: false,
      logging: 'warn',
    },
    hot: true,
    static: {
      directory: path.join(projectRoot, 'public'),
    },
    compress: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        oneOf: [
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
            ],
          },
          {
            test: /\.css$/,
            use: [MiniCSSExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|jpg|gif|woff|woff2|otf)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
            type: 'javascript/auto',
          },
        ],
      },
    ],
  },
  plugins: [
    new TamaguiPlugin(tamaguiOptions),
    new MiniCSSExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      ignoreOrder: true,
    }),
    isProduction ? null : new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      process: {
        env: {
          IS_STATIC: '""',
          NODE_ENV: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === 'development' ? 'true' : 'false',
          TAMAGUI_TARGET: JSON.stringify('web'),
          DEBUG: JSON.stringify(process.env.DEBUG || '0'),
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: `./index.html`,
    }),
  ].filter(Boolean),
};
