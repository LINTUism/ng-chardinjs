(function() {
    'use strict';
    angular
        .module('ng-chardinjs',[])
        .directive('ngChardin', ngChardin);
    ngChardin.$inject = [];
    /* @ngInject */
    function ngChardin() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            	ngChardin:"="
            }
        };
        return directive;
        function link(scope, element, attrs) {
        	var started = false;
        	scope.$watch('ngChardin',function(newVal,oldVal){
        		if(newVal==oldVal){
        			return;
        		}
        		if(scope.ngChardin){
	        		started = true;
	        		$(element).chardinJs('start');
	        	}
	        	else if(scope.ngChardin==false&&started){
	        		$(element).chardinJs('stop');
	        	}
        	});
        	
        }
    }
})();