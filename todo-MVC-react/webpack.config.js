var path = require('path'); // node中的 路径解析的模块
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry:'./src/app.js',
    //出口文件
    output:{
        //出口文件名称
        filename:'index.js',
        // 出口文件路径
        path:path.resolve( __dirname , 'dist' )
        ,publicPath:"/"
    },
    // webpack-dev-server 服务器目录
    devServer: {
     contentBase: './dist/'
    },

    //插件
    plugins:[
        // 自动在出口路劲生成 html文件， 函数可以接受一个对象：template为生成新html文件的模板文件
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    // 模块处理
    module:{
        //处理规则
        rules:[
            //处理css
            {
                //匹配文件
                test:/\.css$/,
                //使用的loader，处理顺序为从后向前处理
                use:['style-loader','css-loader']
            },
            // 处理文件：img。。。
            {
                //匹配文件
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    //loader处理文件时的一些配置选项
                    options:{
                        //大小限制 （以字节为单位）：小于这个限制的会转为 base64
                        limit:1024
                    }
                }]
            },
            //处理react JSX 语法 和 ES6语法
            {
                //匹配文件
                test:/\.js$/,
                //排除 node_modules文件下的所有文件
                exclude: path.resolve( __dirname , 'node_modules' ),
                //使用的loader信息
                use:{
                    loader:'babel-loader',
                    options:{
                        //使用的预设：env处理ES6语法 ， react处理JSX语法 , stage-0处理react对ES6部分语法不支持的问题
                        presets:[ 'env','react','stage-0']
                    }
                }

            }
        ]
    }

}
