'use strict';

myApp.directive('profile', function() {
  return {
    restrict: 'E',
    scope: { email: '=' },
    templateUrl: 'partials/profile.html',
    link: function(scope) {
      scope.leak = 'leak';
    }
  };
});
