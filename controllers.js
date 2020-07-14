//Controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){

  $scope.city = cityService.city

  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

  $scope.submit = function(){
    $location.path('/forecast');
  }

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', 'weatherService', function($scope, cityService, weatherService){

  $scope.city = cityService.city;

  $scope.weatherResult = weatherService.GetWeather($scope.city);

  $scope.converToDate = function(dt){
    return new Date(dt * 1000);
  }

}]);
