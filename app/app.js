(function () {
    var app = angular.module('libraryApp', ['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: '',
                templateUrl: 'app/views/home.html'
             })            
            .when('/books/:genreName', {
                controller: 'GenreController',
                templateUrl: 'app/views/books.html'
             })
            .otherwise( { redirectTo: '/' });
    });
    
}());