var expect = require('chai').expect;

describe('WinesCtrl', function () {
  beforeEach(angular.mock.module('sb-wine'));

  it('should call Wines#fetchWines whenever it loads', function () {
    var wines;

    angular.mock.module(function ($provide) {
      wines = [{
        id: 1,
        name: 'Pinot Noir'
      }, {
        id: 2,
        name: 'Cabernet'
      }];

      var Wines = function () {
        this.fetchWines = sinon.stub().returns({
          then: function (fn) {
            fn(wines)
          }
        });
      };

      $provide.service('Wines', Wines);
    });

    angular.mock.inject(function ($controller, $rootScope, Wines) {
      var scope = $rootScope.$new();
      var winesCtrl = $controller('WinesCtrl', { $scope: scope });
      expect(Wines.fetchWines.calledOnce).to.equal(true);
      expect(scope.wines).to.equal(wines);
    });
  });
});
