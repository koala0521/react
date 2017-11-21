const  path = require('path');

module.exports = {
    //入口文件
    entry:'./src/app.js',
    // 出口文件信息
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist/assets'),
        publicPath:'/assets/'
    }
};