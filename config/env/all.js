'use strict';

module.exports = {
  appName: 'Nukes',
  port: process.env.PORT || 3000,
  redis: process.env.REDIS_URL ||'',
  sessionSecret: 'b7b674de8e11062c156f07b9a5c6fecc',
  cookie: {},
  cachebox: {
    ttl: 30
  },
  db: {
    uri: process.env.MONGO_URL || ('mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + 'nukes')
  },
  cdn_base: process.env.CDN_BASE,
  assets: { //All of these must be contained in the public folder
    js: [
      '/primus/primus.js#nomin#nocdn',
      'lib/lodash/lodash.js',
      'lib/q/q.js',
      'lib/jquery/dist/jquery.js',
      'lib/bootstrap/dist/js/bootstrap.js',
      'lib/highcharts-release/highcharts.js',
      'lib/threejs/build/three.js',
      'lib/cesiumjs/Cesium/Cesium.js',
      'js/bundle.js'
    ],
    css: [
      'css/global.css',
      'lib/fontawesome/css/font-awesome.css',
      'lib/bootstrap/dist/css/bootstrap.css',
      'lib/cesiumjs/Cesium/Widgets/widgets.css'
    ]
  }
};
