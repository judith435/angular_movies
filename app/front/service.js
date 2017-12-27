manageMovies.movieApp.service('movieService', function($http) {
    //http://localhost:8080/joint/movies-with-pictures/back/api/api.php?ctrl=director
                //url : 'http://localhost:8080/joint/movies-with-pictures/back/api/api.php',
                // url : '../back/api/api.php',

    this.getDirectors = function (success) { 
        var ajaxData = {
            ctrl: 'director'
        };
    
        $http({
            url : 'http://localhost:8080/joint/angular_movies/app/back/api/api.php',
            method : "GET",
            params: {ctrl: 'director'}
        }).then(success, error);
    }

    this.addMovie = function (movie, success) { 

        var request = $http({
            url: 'http://localhost:8080/joint/angular_movies/app/back/api/api.php',
            method: "POST",
            data: movie,
            headers: "'Content-Type': 'application/x-www-form-urlencoded'"
        }).then(success, error);
    }

    function error(response) {
        alert("Sorry Error occured in $http: " + JSON.stringify(response));
    }
});
