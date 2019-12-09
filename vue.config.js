const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      //后缀名.js .vue .json
      extensions: ['.js', '.vue', '.json'],
      //设置esm.js文件
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')//@符号代表后面的别名
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''// rewrite path

        }

      }

    }
  }


}