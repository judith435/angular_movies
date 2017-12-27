manageMovies.movieApp.controller('createMovie', function createMovieCtrl($scope, movieService) {
    $scope.showErrorMessages = false;
    fillDirectorsDDL();

    function fillDirectorsDDL() {
        movieService.getDirectors(function(directors) {
            $scope.directors = directors.data;
        });
    }

    $scope.addMovie = function()  {
        if ($scope.frmCU.$invalid){
             $scope.showErrorMessages = true;
             return;
        }
        movie = {
            ctrl: "movie",
            movie_name: $scope.movieName,
            director_id: $scope.selectedDirector
        };
        movieService.addMovie(movie, function(response) {
            alert(JSON.stringify(response.data));
        });
        $scope.showErrorMessages = false;
    }  


});