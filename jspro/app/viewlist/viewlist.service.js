'use strict';

angular.module('myApp')
        .factory('viewlist_service', viewlist_service);

viewlist_service.$inject = ['$http'];

function viewlist_service($http) {
    var service = {};
    service.readall = readall;
    service.remov = remov;
    return service

    function readall(){
        return $http.get('http://localhost:3000/courses').then(handleSuccess, handleError('Error'));
  
    }

    function remov(name){
      return $http.delete(`http://localhost:3000/courses/${name}`).then(handleSuccess, handleError('Error'));

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