'use strict';

myApp.directive('demoGreet', function($parse) {
  return {
    scope: true,
    compile: function compileFn(cElement, attrs) {
      console.log('compileFn(', cElement, attrs, ')');
      cElement.addClass('greet');
      return function linkFn(scope, lElement, attrs) {
        console.log('linkingFn(', scope, lElement, attrs, ')', cElement == lElement);

        scope.leak = 'LEAKING';

        scope.$watch(attrs.greet, function(name) {
          lElement.text('Hello ' + name + '!');
        });

        lElement.bind('click', function() {
          scope.$apply(function() {
            $parse(attrs.greet).assign(scope, 'WORLD');
          });
        });
      }
    }
  };
});
