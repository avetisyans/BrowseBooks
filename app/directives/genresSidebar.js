(function() {
angular.module('libraryApp').directive('genresSidebar', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/views/genres_sidebar.html'
	};
})
}());