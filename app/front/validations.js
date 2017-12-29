// manageMovies.movieApp.directive("dupli", function() {
movieApp.directive("dupli", function() {
        return {
      restrict: "A",
    //   scope: true,
      link: function($rootScope, element, attributes) {
            return $rootScope.selectedDirector === 24;
      }
    };
});


// manageMovies.movieApp.directive("odd", function() {
movieApp.directive("odd", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.odd = function(modelValue) {
          return modelValue % 2 === 1;
        };
      }
    };
  });