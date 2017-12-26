movieApp.service('movieService', function($http) {
    var ajaxData = {
        ctrl: 'director'
    };

    // this.getDirectors = function (success) { 
    //     $http({
    //         url : 'http://localhost:8080/joint/movies-with-pictures/back/api/api.php',
    //         method : "GET",
    //         params: {ctrl: 'director'}
    //     }).then(function (response) {
            
    //         // on success
    //         $scope.people = response.data;
            
    //     }, function (response) {
            
    //         // on error
    //         console.log(response.data,response.status);
            
    //     });
    // }
    this.getDirectors = function (success) { 
        $http({
            url : 'http://localhost:8080/joint/movies-with-pictures/back/api/api.php',
            method : "GET",
            params: {ctrl: 'director'}
        }).then(success, error);
        
    }

    function error(response) {
        alert("Sorry Error occured in get directors");
    }
});
