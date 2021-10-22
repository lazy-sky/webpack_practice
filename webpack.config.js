const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  return {
    entry: './src/main.js',
    output: {
      // 기본값 설정돼있어서 생략 가능
      // path: '',
      // filename: '',
      publicPath: '/',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'static'
          }
        ]
      })
    ]
  }
}