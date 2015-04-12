'use strict';

angular.module('mnsAngular', ['ngAnimate', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/templates/main.html',
        controller: 'MainCtrl'
      })
      .state('main.home', {
        url: 'home',
        views: {
          'main-content': {
            templateUrl: 'app/templates/home.html'
          }
        }
      })
      .state('main.shop', {
        url: 'shop',
        views: {
          'main-content': {
            templateUrl: 'app/templates/shop.html',
            controller: 'ShopCtrl'
          }
        }
      })
      .state('main.cart', {
        url: 'cart',
        views: {
          'main-content': {
            templateUrl: 'app/templates/cart.html',
            controller: 'CartCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  })
;
