'use strict';

angular.module('mnsAngular')
  .controller('CartCtrl', function ($scope, mnsFactory) {
    mnsFactory.getCartItems()
      .success(function (items) {
        if (!items.length){
          $scope.status = "There are not events for this search!";
        } else {
          $scope.items = items;
        }
      });
  });
