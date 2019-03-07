'use strict';

angular.module('myApp')
        .factory('login_service', login_service);

login_service.$inject = ['$http'];

function login_service($http) {
    var service = {};
    service.login = login;
    return service
    
   function login(user) {
      return $http.post('http://localhost:3000/user/login', user).then(handleSuccess, handleError('Error logging user'));

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