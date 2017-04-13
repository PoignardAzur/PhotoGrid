// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var package = require('../package.json')

const standardSettings = require('standard-settings')
const settings = require('nconf').get()

module.exports = {
  settings: settings,
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
}
