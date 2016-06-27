/*
  Custom module loader
  Specify - extension, name of the loader,
  path to exclude and other params for loader
*/

var config = require('./config.js');

// Custom module loaders : ex: babel, style, css, images ...
// Useful for new es6 syntax, JSX, React etc.
config.module = {
  loaders: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      ],
    },
  ],
};
