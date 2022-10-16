cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-purchases.plugin",
      "file": "plugins/cordova-plugin-purchases/www/plugin.js",
      "pluginId": "cordova-plugin-purchases",
      "clobbers": [
        "Purchases"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-annotated-plugin-android": "1.0.4",
    "cordova-plugin-purchases": "3.1.0"
  };
});