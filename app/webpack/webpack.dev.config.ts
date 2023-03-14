import path from 'path'
import { HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import Dotenv from 'dotenv-webpack'

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new HotModuleReplacementPlugin(),
    new Dotenv({ path: '../.env' })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    port: 80,
    open: true,
    hot: true
  }
}
