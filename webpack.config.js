const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  return {
    resolve: {
      extensions: ['.js'],
      alias:{
        '~': path.resolve(__dirname, 'src')
      },
    },
    entry: './src/main.js',
    output: {
      // 기본값 설정돼있어서 생략 가능
      // path: '',
      // filename: '',
      publicPath: '/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: [
            // 처리 순서 역순으로 작성
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
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
    ],
    // devServer: {
    //   port: 8080,
    //   open: true,
    //   historyApiFallback: true,
    // },
  }
}