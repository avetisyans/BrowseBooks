(function() {
    
    var libraryFactory = function($http) {
        
        var factory = {};
           
        factory.getGenre = function(genreName) {
            return $http.get('/api/books/' + genreName);
        };
        
        return factory;
    };
    
    libraryFactory.$inject = ['$http'];
    angular.module('libraryApp').factory('libraryFactory', libraryFactory);
    
}());