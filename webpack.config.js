
const { watch } = require('fs')
const path = require('path')
const testUtils = require('react-dom/test-utils')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    watchFiles: ("app/**/*.html") ,
    static: {
      directory: path.join(__dirname, "app"),
      watch: false
    },
    hot: true,
    port: 8080,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }, { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
        
      }
    ]
  }

}