const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
 entry: path.resolve(__dirname, 'src/lib/index.js'),
 output: {
  path: path.resolve(__dirname, './build/lib'),
  filename: 'index.js',
  library: '',
  libraryTarget: 'commonjs'
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
     loader: "babel-loader",
     options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
     }
    }]
   },
   {
    test: /\.*css$/,
    use : ExtractTextPlugin.extract({
     fallback : 'style-loader',
     use : [
      'css-loader',
      'sass-loader'
     ]
    })
   },
   {
    test: /\.(png|svg|jpg|gif)$/,
    use: {
     loader: "file-loader"
    }
   },
   {
    test: /\.html$/,
    use: [
     {
      loader: "html-loader",
      options: {minimize: true}
     }
    ]
   },
   {
    test: /\.scss$/,
    use: [
     "style-loader",
     "css-loader",
     "sass-loader"
    ]
   }
  ]
 },
 resolve: {
  extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
 },
 plugins: [
  // new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  // }),
  new MiniCssExtractPlugin({
   filename: "[name].css",
   chunkFilename: "[id].css"
  })
 ]
}
