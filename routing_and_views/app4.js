//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/AddNewOrder', {
                templateUrl: 'templates/add_order.html',
                controller: 'CommonController',
                foodata: 'addorder'
            }).
            when('/ShowOrders', {
                templateUrl: 'templates/show_orders.html',
                controller: 'CommonController',
                foodata: 'showorders'
            });

    }]);

sampleApp.controller('CommonController', function($scope, $route) {
    //access the foodata property using $route.current
    var foo = $route.current.foodata;

    alert(foo);
});
