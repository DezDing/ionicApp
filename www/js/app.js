// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.controller('CheckController', function($scope, $cordovaInAppBrowser,$cordovaAppAvailability) {
  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    var scheme;
// Don't forget to add the org.apache.cordova.device plugin!
    if(device.platform === 'iOS') {
      scheme = 'twitter://';
    }
    else if(device.platform === 'Android') {
      scheme = 'com.baidu.BaiduMap';
    }
    $cordovaAppAvailability.check(
      scheme).then( // URI Scheme
      function() {  // Success callback
        navigator.startApp.start("com.baidu.BaiduMap", function(message) {  /* success */
            console.log(message); // => OK
          },
          function(error) { /* error */
            console.log(error);
          });
        console.log('Twitter is available');
      },
      function() {  // Error callback
        window.open('https://twitter.com/gajotres', '_system', 'location=no');
        console.log('Twitter is not available');
      }
    );
  }
});


