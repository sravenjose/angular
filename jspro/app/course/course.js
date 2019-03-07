(function () {


    'use strict';
    
    angular.module('myApp')
          .controller('View3Ctrl', View3Ctrl);
       
    View3Ctrl.$inject = ['course_service','$window'];
    function View3Ctrl(course_service,$window) {
      var vm=this;

    vm.redirect= function(){
      $window.location = "/#!/viewlist";
    }

    vm.submit=function(){
    course_service.insert(vm.course).then(function (response) {
        if (response.status==200) {
          $window.location.reload();
        } else {
          console.log("error")
        }
    });
    
    


    }

}
    
    
})();