movieApp.service('validationService', function($http) {
    this.checkDuplicateMovie = function(selectedDirector) {
        return selectedDirector !== 25;
    }
});