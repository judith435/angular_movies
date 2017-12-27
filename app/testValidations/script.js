(function() {

    var app = angular.module("demo", ["ngMessages"]);
  
    app.controller("ProfileController", function() {
      var model = this;
      
      model.message = "";
      model.submit = function(valid) {
        if (valid) {
          model.message = "Your new number is " + model.number;
        } else {
          model.message = "Needs fixing!";
        }
      };
    });
  
    app.directive("odd", function() {
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
  
    app.directive("prime", function($q, $timeout) {
  
      var isPrime = function(n) {
        if (n < 2) { 
          return false; 
        }
  
        for (var i = 2; i <= Math.sqrt(n); i++) {
          if (n % i == 0) {
            return false;
          }
        }
        return true;
      };
  
      return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
          ngModel.$asyncValidators.prime = function(modelValue) {
            var defer = $q.defer();
            $timeout(function(){
              if(isPrime(modelValue)) {
                defer.resolve();
              } else {
                defer.reject();
              }
            }, 2000);
            return defer.promise;
          }
        }
      };
    });
  
  }());