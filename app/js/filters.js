'use strict';

myApp.filter('gravatar', function() {
  return function(email) {
    if (email) {
      return 'http://www.gravatar.com/avatar/' + hex_md5(email) + '.jpg';
    }
  }
});
