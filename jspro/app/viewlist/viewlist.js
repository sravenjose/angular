
(function () {


    'use strict';
    
    angular.module('myApp')
          .controller('View4Ctrl', View4Ctrl);
       
    View4Ctrl.$inject = ['viewlist_service','$scope','$window'];
    function View4Ctrl(viewlist_service,$scope,$window) {
    var vm=this;

    $scope.redirect= function(){
      $window.location = "/#!/course";
    }

    viewlist_service.readall().then(function (response) {
        if (response) {
            console.log(response.course);
            $scope.courses=response.course;
        } else {
          console.log("error")
        }    
    })

     $scope.delete=function(c){
      var name=c.name;
      console.log(name)
      viewlist_service.remov(name).then(function (response) {
        console.log(response)
        if (response.status==200) {
          console.log("success");
          $window.location.reload();
        } else {
          console.log("error")
        }
      });
    }

}
    
    
})();