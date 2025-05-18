const path = require('path')

module.exports = {
  transpileDependencies: ["@dcloudio/uni-ui"],
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname)) // 根目录别名
  }
};
