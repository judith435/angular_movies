movieApp.service('movieService', function($http) {
    var ajaxData = {
        ctrl: 'director'
    };

    this.getDirectors = function (success) { 
        $http({
            method : "GET",
            url : 'http://localhost:8080/joint/movies-with-pictures/back/api/api.php',
            data: ajaxData,
        }).then(success, error);
        
    }

    function error(response) {
        alert("Sorry Error occured in get directors");
    }
});
