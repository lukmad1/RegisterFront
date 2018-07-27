'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$http', function ($http) {
        var self = this;
        this.zmienna = 5;
        this.funkcja = function () {
            console.log('costam');
        }
        this.pobierz = function () {
            $http.get('http://localhost:8080/listStudent')
                .then(function (value) {
                    self.dane = value.data;
                    console.log(value.data);
                    },
                    function (error) {
                    console.log('error');
                    });
        }
    }]);