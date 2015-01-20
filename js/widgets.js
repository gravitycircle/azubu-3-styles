(function(){
	var widgets = angular.module('bricks', []);
	
	widgets.directive('videoBrick', function(){
		return {
			restrict: 'E',
			templateUrl: '/templates/video-brick.html'
		};
	});
	
	widgets.directive('contentBrick', function(){
		return {
			restrict: 'E',
			templateUrl: '/templates/content-brick.html'
		};
	});
	
	widgets.directive('gadgetBrick', function(){
		return {
			restrict: 'E',
			templateUrl: '/templates/gadget-brick.html'
		};
	});
})();