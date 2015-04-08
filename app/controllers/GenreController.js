(function () {

    var GenreController = function ($scope, $routeParams, libraryFactory) {
        var genreName = $routeParams.genreName;
        $scope.books = [];
        $scope.upRank = function(book) {
            libraryFactory.upRank(book)
                .success(function(theBook) {
                    book.rank = theBook.rank;
                })
                .error(function(data, status, headers, config) {
                    console.log("UpRank Error");
                      console.log(data.error + ' ' + status);
                });
        }

        $scope.downRank = function(book) {
            libraryFactory.downRank(book)
                .success(function(theBook) {
                    book.rank = theBook.rank;
                })
                .error(function(data, status, headers, config) {
                    console.log("DownRank Error");
                      console.log(data.error + ' ' + status);
                });
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