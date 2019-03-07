'use strict';

angular.module('myApp')
        .factory('reg_service', reg_service);

reg_service.$inject = ['$http'];

function reg_service($http) {
    var service = {};
    service.signup = signup;
    return service
    
   function signup(user) {
      return $http.post('http://localhost:3000/user/signup', user).then(handleSuccess, handleError('Error signing up'));

    }

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function () {
          return { success: false, message: error };
      };
    }
}