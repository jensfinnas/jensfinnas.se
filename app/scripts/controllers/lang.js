'use strict';

/**
 * @ngdoc function
 * @name jensfinnasseApp.controller:LangCtrl
 * @description
 * # LangCtrl
 * Controller of the jensfinnasseApp
 */
angular.module('jensfinnasseApp')
  .controller('LangCtrl', ['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLang = function (key) {
        $translate.use(key);
    };
  }])
