const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const prod = process.env.NODE_ENV === 'production'
console.log(`building in ${prod ? 'prod' : 'dev'} mode`)

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.ejs',
  }),
]

const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.svg', '.png', '.js', '.json'],
  },
  devtool: 'source-map',
  node: {
    __dirname: false,
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
        query: {},
      },
      {
        test: /\.(?:png)$/,
        loader: 'url-loader',
        query: {
          // Inline images smaller than 10kb as data URIs
          limit: 10000,
        },
      },
    ],
  },
  plugins: plugins.concat(prod ? [] : [new webpack.HotModuleReplacementPlugin()]),
}

if (!prod) {
  const publicPath = 'http://localhost:8484/'
  commonConfig.output.publicPath = publicPath
  commonConfig.devServer = {
    contentBase: './build',
    publicPath,
    port: 8484,
  }
}

function getEntry(path) {
  return prod ? path : ['webpack/hot/dev-server', path]
}

module.exports = Object.assign({}, commonConfig, {
  entry: getEntry('./src/index.js'),
})
