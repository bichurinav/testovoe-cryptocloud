const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/main.js',
  plugins: [new miniCssExtractPlugin({filename: 'style.css'})],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)$/,
      //   use: [
      //            {
      //                loader: 'file-loader?name=./src/fonts/[name].[ext]'
      //            },
      //        ]
      // }
    ]
  }
}