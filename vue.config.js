module.exports = {
  "transpileDependencies": [
    "vuetify"
  ]
}

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'XStock',
    themeColor: '#70A83B',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
 
    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // }
  }
}