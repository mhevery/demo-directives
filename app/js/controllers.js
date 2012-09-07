'use strict';

myApp.controller('Demo', function($scope) {
  $scope.name = 'world';
  $scope.leak = 'none';

  $scope.email = 'misko@hevery.com';

  $scope.devs = [
    'misko@hevery.com',
    'iiminar@gmail.com',
    'vojta.jina@gmail.com'
  ];
});
