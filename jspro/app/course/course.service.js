'use strict';

angular.module('myApp')
        .factory('course_service', course_service);

course_service.$inject = ['$http'];

function course_service($http) {
    var service = {};
    service.insert = insert;
    return service
    
   function insert(course) {
      return $http.post('http://localhost:3000/courses', course).then(handleSuccess, handleError('Error signing up'));

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