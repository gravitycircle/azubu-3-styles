(function(){
	var widgets = angular.module('bricks', []);
	
	widgets.directive('videoBrick', ['$http', '$sce', function($http, $sce){
		return {
			restrict: 'E',
			templateUrl: '/templates/video-brick.html',
			scope: {
				video_details: '@'
			},
			controller: function($scope){
				$http.get('../emulated-api-replies/video-request.json').success(function(info){
					$scope.video_details = info;
					$scope.video_details.trustedUrl = $sce.trustAsResourceUrl(info.embedUrl);
				});
			},
			controllerAs: 'video'
		};
	}]);
	
	widgets.directive('contentBrick', ['$http',function($http){
		return {
			restrict: 'E',
			templateUrl: '/templates/content-brick.html',
			scope:{
				blog_details: '@'
			},
			controller: function($scope){
				$http.get('../emulated-api-replies/blog-request.json').success(function(info){
					$scope.blog_details = info;
				});
			}
		};
	}]);
	
	widgets.directive('gadgetBrick', ['$http', function($http){
		return {
			restrict: 'E',
			templateUrl: '/templates/gadget-brick.html',
			scope: {
				gear: '@'
			},
			controller: function($scope){
				$http.get('../emulated-api-replies/gear-request.json').success(function(info){
					$scope.gear = info;
				});
			}
		};
	}]);
})();