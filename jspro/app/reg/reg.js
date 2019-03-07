(function () {


    'use strict';
    
    angular.module('myApp')
          .controller('View2Ctrl', View2Ctrl);
       
    View2Ctrl.$inject = ['reg_service'];
    function View2Ctrl(reg_service) {
      var vm=this;
      vm.submit=function(){
      reg_service.signup(vm.user).then(function (response) {
        console.log(response)
        if (response.status==200) {
          console.log("success");
        } else {
          console.log("error")
        }
     });
    
      }
    }
    
    
    
    })();