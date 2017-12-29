
  //   function checkDuplicateMovie() {
  //     var director = movieApp.validationService.getSelectedDirector(); 
  //     alert(director);

  // }

// // manageMovies.movieApp.directive("dupli", function() {
// movieApp.directive("dupli", function() {
//         return {
//       restrict: "AE",
//     //   scope: true,
//       link: function($validationService, element, attributes) {
//             return $validationService.selectedDirector === 24;
//       }
//     };
// });


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