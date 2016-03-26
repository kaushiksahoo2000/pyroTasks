module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname + '/client/_dist',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/client/',
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ["style", "css", "sass"]
      // },
      // {
      //   test: /\.jpg$/,
      //   loader: 'file-loader'
      // },
      // {
      //   test:/\.(png|jpg)$/,
      //   loader: 'url?limit=25000'
      // }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './client/'
  }
};
