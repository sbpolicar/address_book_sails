console.log('angular app init')

var addressApp = angular.module('AddressApp',['ui.bootstrap','ngRoute','sailsResource','ngMessages'])

addressApp.run(function(){
  console.log('address app init');
});

addressApp.config(['$routeProvider','$locationProvider','sailsResourceProvider', function($routeProvider,$locationProvider, sailsResourceProvider){

  sailsResourceProvider.configuration = {
    prefix:'/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/person/new',{
    templateUrl:'/views/newPerson.html',
    controller:'NewPersonCtrl'
  })

  .otherwise({
    templateUrl:'/views/404.html'
  })

}]);