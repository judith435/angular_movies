
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