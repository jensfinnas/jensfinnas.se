'use strict';

/**
 * @ngdoc function
 * @name jensfinnasseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jensfinnasseApp
 */
angular.module('jensfinnasseApp')
  .controller('MainCtrl', function ($scope, $translate) {
    $scope.currentLanguage = 'en';//;$translate.uses();
    $translate.use('en');
    $scope.sections = [
        {
          id: "meaning",
          color: "rgb(255,119,75)"
        },
        {
          id: "collaborate",
          color: "rgb(131,196,193)"
        }
    ]
  });
