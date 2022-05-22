const path = require('path')
// eslint-disable-next-line no-unused-vars
const { OutputFileType } = require('typescript')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: {
    // eslint-disable-next-line quote-props
    'index': './index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx', '.ts', '.js'
    ]
  },
  externals: [nodeExternals()]
}
