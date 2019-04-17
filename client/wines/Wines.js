var data = require('./wines.json');

angular.module('sb-wine').service('Wines', function ($q) {
  this.fetchWines = function () {
    // Replace this with a call to the server.
    return $q.when(data.wines);
  };
});
