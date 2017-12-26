movieApp.controller('createMovie', function createMovieCtrl($scope, movieService) {
    $scope.showErrorMessages = false;
    $scope.movie_name = 'hello gunibush';

    getDirectors();
    // $scope.notes = noteService.getNotes(true);

    function getDirectors() {
        
        movieService.getDirectors(function(directors) {
            alert(directors);
        });
    }


});