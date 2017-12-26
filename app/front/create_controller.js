movieApp.controller('createMovie', function createMovieCtrl($scope, movieService) {
    $scope.showErrorMessages = false;

    fillDirectorsDDL();
    // $scope.notes = noteService.getNotes(true);

    function fillDirectorsDDL() {
        movieService.getDirectors(function(directors) {
            alert(JSON.stringify(directors));
            $scope.directors = directors.data;
        });
    }


});