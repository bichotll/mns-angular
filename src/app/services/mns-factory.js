'use strict';

/**
 * @ngdoc service
 * @name mnsAngular.mnsFactory
 * @description
 * # mnsFactory
 * Main factory in the mnsAngular.
 */
angular.module('mnsAngular')
  .factory('mnsFactory', function (/*$http*/) {
    //var urlBase = /*configConstant*/'';
    var dataFactory = {};

    var items = [
      {
        'category': 'Women',
        'subcat': 'Clothing',
        'item': 'Party wear - Front Leather Panelled Ponte Treggings',
        'price': '159.00',
        'uid': 1,
        'quantity': 0
      },
      {
        'category': 'Women',
        'subcat': 'Clothing',
        'item': 'Speziale Italian Cupro Draped Bodycon Dress',
        'price': '89.00',
        'uid': 2,
        'quantity': 0
      },
      {
        'category': 'Beauty',
        'subcat': 'Skincare',
        'item': 'Aptiva - Wine Elixir Night Cream',
        'price': '79.00',
        'uid': 3,
        'quantity': 0
      },
      {
        'category': 'Men',
        'subcat': 'Suits & Tailoring',
        'item': 'Sartorial – Slim Fit Luxury Pure Cotton Rib Striped Shirt',
        'price': '39.50',
        'uid': 4,
        'quantity': 0
      },
      {
        'category': 'Men',
        'subcat': 'Jeans',
        'item': 'Big & Tall Washed Look Bootleg Denim Jeanst',
        'price': '25.00',
        'uid': 5,
        'quantity': 0
      }
    ];

    dataFactory.getItems = function () {
      return {
        success: function (callback) {
          callback(items);
        }
      };
    };

    dataFactory.getCartItems = function () {
      var cartItems = items.filter(function(item){
        return item.quantity !== 0;
      });
      return {
        success: function (callback) {
          callback(cartItems);
        }
      };
    };

    dataFactory.addItemToCart = function (uid) {
      items.every(function (item) {
        if (item.uid === uid) {
          item.quantity++;
          return false;
        } else {
          return true;
        }
      });

      return {
        success: function (callback) {
          callback(true);
        }
      };
    };

    dataFactory.removeItemFromCart = function (uid) {
      items.every(function (item) {
        if (item.uid === uid) {
          item.quantity--;
          return false;
        } else {
          return true;
        }
      });

      return {
        success: function (callback) {
          callback(true);
        }
      };
    };

    return dataFactory;
  });
