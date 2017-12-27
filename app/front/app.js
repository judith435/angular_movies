var manageMovies = (function() {

    var movieApp = {};
    movieApp = angular.module('movie-app', ['ngMessages']);

    movieApp.directive("odd", function() {
        return {
          restrict: "A",
          require: "ngModel",
          link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.odd = function(modelValue) {
                alert(modelValue);
              return true; //modelValue % 2 === 1;
            };
          }
        };
    });

    return {

      movieApp 
  };

}());


// var movieApp = angular.module('movie-app', ['ngMessages']);
