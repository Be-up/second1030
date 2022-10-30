const { defineConfig } = require('@vue/cli-service')
// const { resolve } = require('core-js/fn/promise')
const path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  //
  /* configureWebpack:{
    resolve:{
      alias:{
        'S':resolve('src')
      }
    }
  } */
 /*  chainWebpack: config => {
    config.resolve.alias
     .set('@', resolve('src'))
     .set('assets', resolve('src/assets'))
     .set('components', resolve('src/components'))
     .set('layout', resolve('src/layout'))
   } */
   /* chainWebpack: config => {
    config.resolve.alias
     .set('S', resolve('src'))
   } */
})
