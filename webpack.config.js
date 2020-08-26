const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = (env = {}) => {

  const { mode = 'development' } = env;

  const isProd = mode == 'production';
  const isDev = mode == 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ];
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new ErrorOverlayPlugin()
    ];
    if (isProd){
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }))
    }
    return plugins;
  }

  return {
    mode: isProd ? 'production' : isDev && 'development',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Loading scc
        {
          test: /\.css$/,
          use: getStyleLoaders()
        },
        // Loading sass/scss
        {
          test: /\.(s[ca]ss)$/,
          use: [ ...getStyleLoaders(), 'sass-loader' ]
        },
      ]
    },
    plugins: getPlugins(),
    devServer: {
      open: true
    },
    devtool: 'cheap-module-source-map' // 'eval' is not supported by error-overlay-webpack-plugin
  };
}
