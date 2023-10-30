const path = require('path')
const { DefinePlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { TamaguiPlugin } = require('tamagui-loader')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const NODE_ENV = process.env.EXPO_NODE_ENV || 'development'
const isProduction = NODE_ENV === 'production'
const projectRoot = __dirname;

const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
  boolVals[process.env.EXPO_DISABLE_EXTRACTION] ?? NODE_ENV === 'development'

const tamaguiOptions = {
  config: './tamagui.config.ts',
  components: ['tamagui'],
  importsWhitelist: ['constants.js'],
  disableExtraction,
}; 

/** @type { import('webpack').Configuration } */
module.exports = {
  context: projectRoot,
  stats: 'normal',
  mode: NODE_ENV,
  entry: ['./index.web.tsx'],
  devtool: 'cheap-module-source-map',
  optimization: {
    concatenateModules: false,
    minimize: false,
  },
  resolve: {
    mainFields: ['module:jsx', 'browser', 'module', 'main'],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
    ],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-svg': '@tamagui/react-native-svg',
      '@expo/vector-icons': '@tamagui/proxy-worm',
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
        test: /\.(ts|js)x?$/,
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
        test: /\.(gif|jpe?g|png|svg|ttf|otf|woff2?|bmp|webp|png|jpg|gif|woff|woff2)$/i,
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
          NODE_ENV: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === 'development' ? 'true' : 'false',
          DEBUG: JSON.stringify(process.env.EXPO_DEBUG || '0'),
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: `./index.html`,
    }),
  ].filter(Boolean),
};
