// manageMovies.movieApp.directive("dupli", function() {
//     return {
//       restrict: "A",
//       scope: true,
//       link: function(scope, element, attributes) {
//             return $scope.selectedDirector === 24;
//       }
//     };
// });



//  manageMovies.movieApp.directive("odd", function() {
//     return {
//       restrict: "A",
//       require: "ngModel",
//       link: function(scope, element, attributes, ngModel) {
//         ngModel.$validators.odd = function(modelValue) {
//             alert(modelValue);
//           return modelValue % 2 === 1;
//         };
//       }
//     };
//   });