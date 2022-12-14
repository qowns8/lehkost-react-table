const baseConfig = require('./config.base.ts')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const configurationProd = {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [/node_modules/, /example/],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          'ts-loader',
        ],
        exclude: [/node_modules/, /example/],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
}

module.exports = {
  ...baseConfig,
  ...configurationProd
}