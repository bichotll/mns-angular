'use strict';

angular.module('mnsAngular')
  .controller('CartCtrl', function ($scope, mnsFactory) {
    var setTotal = function(items){
      var total = 0;
      items.forEach(function(item){
        total += item.price * item.quantity;
      });
      $scope.total = total;
    };
    mnsFactory.getCartItems()
      .success(function (items) {
        if (!items.length){
          $scope.status = 'There are not events for this search!';
        } else {
          $scope.items = items;
          //calc total
          setTotal(items);
        }
      });
  });
