(function() {
angular.module('libraryApp').directive('booksPanel', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/views/genres_sidebar.html'
	};
})

}());