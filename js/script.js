(function(){
	var azubu = angular.module('azubu', ['bricks']);
	
	azubu.directive('brick', function($compile){
		return {
			trasclude: 'element',
			restrict: 'E',
			scope: {
				'type' : '@'
			},
			link: function(scope, element, attrs){
				var type = scope.type !== undefined ? scope.type : 'default';
				var template = '<'+type+'-brick></<'+type+'-brick>';

				// default template will not work since you are using dynamic template
				// so make your template as variable inside link method of directive
				// add it as content of element
				//console.log(template);
				element.html(template);

				// bind your element content to scope using $compile
				$compile(element.contents())(scope);

			}
		};
	});
	
	
	azubu.directive('buildPackery', ['$rootScope', function($rootScope) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				if($rootScope.packery === undefined || $rootScope.packery === null){
					$rootScope.packery = new Packery(element[0].parentElement, {
						itemSelector: '.widget-container',
						columnWidth: 400,
						rowHeight: 400,
						gutter: 0
					});
					$rootScope.packery.bindResize();
					$rootScope.packery.appended(element[0]);
					
				}
				else{
					$rootScope.packery.appended(element[0]);
				}
				$rootScope.packery.layout();
			}
		};

	}]);
})();
