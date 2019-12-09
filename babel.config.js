module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ], 
  //Quickstart 中配置，Mint-ul ,babel查看使用方法
  "plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
}
