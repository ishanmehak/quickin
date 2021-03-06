'use strict';

/**
 * @ngdoc overview
 * @name quickinApp
 * @description
 * # quickinApp
 *
 * Main module of the application.
 */
angular
  .module('quickinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/GuestList.html',
        controller: 'guestListCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
