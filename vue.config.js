module.exports = {
  publicPath: '/',
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   'primary-color': '#15B9B9',
        //   'link-color': '#1890ff',
        //   'border-radius-base': '3px'
        // },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  devServer: {
    // port: 8087, // 端口号
    // host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      // '/foo': {
      //   target: 'http://yunpay.waa.cn'
      // },
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
