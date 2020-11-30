(function () {
    'use strict';

    angular.module('moduleApp', [])
        .controller('controller', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.isFine = "";
        $scope.products = "";
        $scope.setResult = function () {
              let products = $scope.products.split(',');
            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].trim() === "") products.splice(i, 1);
            }
            if (products.length === 0) {
                $scope.isFine ="Будь ласка, уведіть дані!";
            } else if (products.length <= 3) {
               $scope.isFine = "На здоров'я!";
            } else {
               $scope.isFine = "Це забагато!";
            }
        }
    }
})();