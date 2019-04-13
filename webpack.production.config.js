/** 这是用于生产环境的webpack配置文件 **/

const path = require("path");
const webpack = require("webpack"); // webpack核心
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 为了单独打包css
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 生成html
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 每次打包前清除旧的build文件夹
const TerserPlugin = require("terser-webpack-plugin"); // 优化js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;  // 包分析
const webpackbar = require("webpackbar");

const PUBLIC_PATH = "./";  // 基础路径

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index")],
  output: {
    path: path.resolve(__dirname, "build"), // 将文件打包到此目录下
    publicPath: PUBLIC_PATH, // 在生成的html中，文件的引入路径会相对于此地址，生成的css中，以及各类图片的URL都会相对于此地址
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[name].[chunkhash:8].chunk.js"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true, // 多线程并行构建
        terserOptions: {
          output: {
            comments: false // 不保留注释
          },
          compress: {
            drop_console: true // 是否删除代码中所有的console
          },
        }
      })
    ]
  },
  module: {
    rules: [
      {
        // .js .jsx用babel解析
        test: /\.js?$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"]
      },
      {
        // .css 解析
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        // .less 解析
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            { loader: "less-loader", options: { javascriptEnabled: true } }
          ]
        })
      },
      {
        // 文件解析
        test: /\.(eot|woff|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
        include: path.resolve(__dirname, "src"),
        use: ["file-loader?name=[name].[hash:4].[ext]"]
      },
      {
        // 图片解析
        test: /\.(png|jpg|gif)$/,
        include: path.resolve(__dirname, "src"),
        use: ["url-loader?limit=8192&name=[name].[hash:4].[ext]"]
      },
    ]
  },
  plugins: [
    new webpackbar(),
    /**
     * 在window环境中注入全局变量
     * **/
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        PUBLIC_URL: PUBLIC_PATH.replace(/\/$/, "")
      })
    }),
    /**
     * 打包前删除上一次打包留下的旧代码（根据output.path）
     * **/
    new CleanWebpackPlugin(),
    /**
     * 提取CSS等样式生成单独的CSS文件
     * **/
    new ExtractTextPlugin({
      filename: "[name].[chunkhash:8].css", // 生成的文件名
      allChunks: true // 从所有chunk中提取
    }),
    /**
     * 自动生成HTML，并注入各参数
     * **/
    new HtmlWebpackPlugin({
      filename: "index.html", //生成的html存放路径，相对于 output.path
      template: "./public/index.ejs", //html模板路径
      templateParameters: {
        // 自动替换index.ejs中的参数
        dll: "",
      },
      inject: true // 是否将js放在body的末尾
    }),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".less", ".css", ".wasm"], //后缀名自动补全
    alias: {
      "src": path.resolve(__dirname, "src")
    }
  }
};
