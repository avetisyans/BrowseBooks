(function() {
    
    var libraryFactory = function($http) {
        
        var factory = {};
           
        factory.getGenre = function(genreName) {
            return $http.get('/api/books/' + genreName);
        };

        factory.upRank = function(book) {
        	return $http.put('/api/books/' + book.id, {"rank": ++book.rank});
        }

        factory.downRank = function(book) {
        	return $http.put('/api/books/' + book.id, {"rank": --book.rank});
        }
        
        return factory;
    };
    
    libraryFactory.$inject = ['$http'];
    angular.module('libraryApp').factory('libraryFactory', libraryFactory);
    
}());