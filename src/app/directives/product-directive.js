'use strict';

/**
 * @ngdoc directive
 * @name mnsAngular.directive:product
 */
angular.module('mnsAngular')
  .directive('product', function (mnsFactory) {
    return {
      templateUrl: 'app/templates/directives/product.html',
      restrict: 'E',
//      transclude: true,
      scope: {
        product: '=productData',
        shop: '='
      },
      link: function postLink(scope) {
        scope.addToCart = function(){
          mnsFactory.addItemToCart(scope.product.uid);
        };
        scope.removeFromCart = function(){
          mnsFactory.removeItemFromCart(scope.product.uid);
        };
      }
    };
  });
