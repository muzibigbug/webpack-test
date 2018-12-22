const webpack = require('webpack');
//引入根据html模板自动创建html页面的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
    devtool: 'eval-source-map',//编译文件和源文件的错误调试
    entry:  __dirname + "/src/app/index.js",//已多次提及的唯一入口文件
    // entry: {//配置多个入口文件
    //     index:__dirname + "/src/index.js",
    //     Greeter:__dirname + "/src/Greeter.js",
    // },
    output: {
      path: __dirname + "/dist",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    //   filename: "[name].js"//打包后多个输出文件的文件名
    },
    // 配置本地服务器
    devServer: {
        contentBase: './src/pages',//本地服务器所加载的页面所有的目录
        port: '8080',//设置默认监听端口，如果省略，默认为”8080“
        inline: true,//实时刷新
        historyApiFallback: true //不跳转
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
  }
