const {resolve} = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const packageName = require('./package.json').name

module.exports = {
  mode: 'production', // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: {
    [packageName]: [
      resolve(__dirname, 'src/main.ts'),
      resolve(__dirname, 'scss/main.scss'),
      resolve(__dirname, 'scss/effect.scss'),
    ],
  },
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results
    path: resolve(__dirname, 'umd'),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: '[name].js',
    // the filename template for entry chunks

    // publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page

    library: packageName,
    // the name of the exported library

    libraryTarget: 'umd', // universal module definition
    // the type of the exported library

    umdNamedDefine: true,
  },

  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.tsx?$/,
        include: /src/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              // we don't want any declaration file in the bundles
              // folder since it wouldn't be of any use ans the source
              // map already include everything for debugging
              // This cannot be set because -> Option 'declarationDir' cannot be specified without specifying option 'declaration'.
              // declaration: false,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
          }
        ]
      },
      // matches if the condition is not matched
    ],
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: ['node_modules'],
    // directories where to look for modules

    extensions: ['.ts', '.tsx', '.js', '.scss'],
    // extensions that are used

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: (assetFilename) => {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },

  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: {},
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: 'errors-only',
  // lets you precisely control what bundle information gets displayed

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].min.css",
      chunkFilename: "[id].min.css"
    }),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ],
  // list of additional plugins
}
