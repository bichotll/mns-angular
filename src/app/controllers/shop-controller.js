'use strict';

angular.module('mnsAngular')
  .controller('ShopCtrl', function ($scope, mnsFactory) {
    mnsFactory.getItems()
      .success(function (items) {
        $scope.items = items;
      });
  });
