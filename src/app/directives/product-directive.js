'use strict';

/**
 * @ngdoc directive
 * @name mnsAngular.directive:product
 */
angular.module('mnsAngular')
  .directive('product', function () {
    return {
      templateUrl: 'app/templates/directives/product.html',
      restrict: 'E',
      transclude: true,
      scope: {
        product: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
