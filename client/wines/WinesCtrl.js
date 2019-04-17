
angular.module('sb-wine').controller('WinesCtrl', function ($scope, Wines) {
  Wines.fetchWines().then(function (wines) {
    $scope.wines = wines;
  });
});
