(function () {

    var GenreController = function ($scope, $routeParams, libraryFactory) {
        var genreName = $routeParams.genreName;
        $scope.books = [];
        $scope.upRank = function(book) {
            console.log("UpRank is Pressed");
            book.rank++;
        }
        $scope.downRank = function(book) {
            console.log("downRank is Pressed");
            book.rank--;
        }
        
        function init() {
            libraryFactory.getGenre(genreName)
                .success(function(books) {
                    $scope.books = books;
                })
                .error(function(data, status, headers, config) {
                    console.log("LibFactory Error");
                      console.log(data.error + ' ' + status);
                });
        }
        
        init();
        
    };
    
    GenreController.$inject = ['$scope', '$routeParams', 'libraryFactory'];

    angular.module('libraryApp')
        .controller('GenreController', GenreController);
}());