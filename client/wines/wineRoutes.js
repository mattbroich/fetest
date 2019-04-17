var template = require('./wines.html');

angular.module('sb-wine').config(function ($stateProvider) {
  $stateProvider
    .state('wines', {
      url: '',
      template: template,
      controller: 'WinesCtrl'
    });
});
