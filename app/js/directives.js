'use strict';

myApp.directive('demoGreet', function($parse) {
  return function linkFn(scope, lElement, attrs) {
    console.log('linkingFn(', scope, lElement, attrs, ')');
    lElement.text('Hello World');
  }
});
