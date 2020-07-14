//Routes
weatherApp.config(function($routeProvider){

  $routeProvider

  .when('/',{
    templateUrl: 'template/home.html',
    controller: 'homeController'
  })

  .when('/forecast',{
    templateUrl: 'template/forecast.html',
    controller: 'forecastController'
  });
});
