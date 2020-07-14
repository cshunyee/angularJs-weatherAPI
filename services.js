//services
weatherApp.service('cityService', function(){
  this.city = 'Singapore';
});

weatherApp.service('weatherService', ['$resource', function($resource){
  this.GetWeather = function(city){

    var appid = '1a0c9767626373597788d55357fc32c0';

    var url = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=' + appid;

    var weatherAPI = $resource(url,
    { get : { method: 'JSONP' }});

    return weatherAPI.get({ q: city });
  }
}]);
