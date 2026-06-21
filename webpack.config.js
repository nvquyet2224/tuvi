const path = require("path");
//const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin");

let fs = require("fs");

const preload = fs.readFileSync(__dirname + "/src/_preload.html");
const svg = fs.readFileSync(__dirname + "/src/_svg.html");

const headerComponent = fs.readFileSync(__dirname + "/src/_component-header.html");
const footerComponent = fs.readFileSync(__dirname + "/src/_component-footer.html");

const home_banner = fs.readFileSync(__dirname + "/src/_home-banner.html");
const home_category = fs.readFileSync(__dirname + "/src/_home-category.html");
const home_collection = fs.readFileSync(__dirname + "/src/_home-collection.html");
const home_bestseller = fs.readFileSync(__dirname + "/src/_home-bestseller.html");
const home_why = fs.readFileSync(__dirname + "/src/_home-why.html");
const home_purpose = fs.readFileSync(__dirname + "/src/_home-purpose.html");

const home_look = fs.readFileSync(__dirname + "/src/_home-look.html");
const home_promotion = fs.readFileSync(__dirname + "/src/_home-promotion.html");

const minifyRules = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: false,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
};

const devMode = true;
const isBack = false;
const minify = false;
const minimized = false;

module.exports = {
  mode: devMode ? "development" : "production",
  watch: true,
  entry: {
    critical: ["./src/js/critical.js"],
    cmp_critical: ["./src/js/critical.js"],
    cmp_reset: ["./src/js/reset.js"],
    cmp_header: ["./src/js/header.js"],
    cmp_common: ["./src/js/common-ui.js"],
    cmp_banner: ["./src/js/banner.js"],
    cmp_swiper: ["./src/js/swiper-ui.js"],
    cmp_home_category: ["./src/js/home-category.js"],
    cmp_home_collection: ["./src/js/home-collection.js"],
    cmp_home_bestseller: ["./src/js/home-bestseller.js"],
    cmp_home_why: ["./src/js/home-why.js"],
    cmp_home_purpose: ["./src/js/home-purpose.js"],
    cmp_home_look: ["./src/js/home-look.js"],
    cmp_home_promotion: ["./src/js/home-promotion.js"],
    cmp_footer: ["./src/js/footer.js"],
  },
  output: {
    publicPath: "../",
    path: path.resolve(__dirname, "html"),
    filename: isBack ? "../../source/plugins/Web/webroot/js/[name].js" : "none/[name].js",
    //filename: isBack ? "../../source/plugins/Web/webroot/js/[name].js" : "js/[name].js", // copy to backend
    library: ["[name]", "modules"],
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isBack ? "../../source/plugins/Web/webroot/css/[name].css" : "css/[name].css", // copy to backend
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images", noErrorOnMissing: true },
        {
          from: "src/js/jquery.js",
          to: "js/jquery.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/jquery-ui.js",
          to: "js/jquery-ui.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/swiper-bundle.js",
          to: "js/swiper-bundle.js",
          info: { minimized: minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/common.js",
          to: "js/common.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        {
          from: "src/js/index_main.js",
          to: "js/index_main.js",
          info: { minimized: !minimized },
          noErrorOnMissing: true,
        },
        { from: "src/videos", to: "videos", noErrorOnMissing: true },
        { from: "src/jsons", to: "jsons", noErrorOnMissing: true }
      ],
      options: {
        concurrency: 100
      },
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "index.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: home_banner,
      home_category: home_category,
      home_collection: home_collection,
      home_bestseller: home_bestseller,
      home_why: home_why,
      home_purpose: home_purpose,
      home_look: home_look,
      home_promotion: home_promotion,
      footer: footerComponent,
      template: "src/index.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "women.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: home_banner,
      footer: footerComponent,
      template: "src/women.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "men.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: home_banner,
      footer: footerComponent,
      template: "src/men.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "kids.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: home_banner,
      footer: footerComponent,
      template: "src/kids.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "collection.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: home_banner,
      footer: footerComponent,
      template: "src/collection.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "sale.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      home_banner: home_banner,
      footer: footerComponent,
      template: "src/sale.html",
      minify: minify,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "404.html",
      preload: preload,
      svg: svg,
      header: headerComponent,
      footer: footerComponent,
      template: "src/404.html",
      minify: minify,
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  watchOptions: {
    ignored: "**/node_modules",
    aggregateTimeout: 100,
  },
};