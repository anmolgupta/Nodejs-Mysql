/**
 * Created by anmolgupta on 12/09/15.
 */

var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../partials/centreList.html',
                controller: 'listController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
