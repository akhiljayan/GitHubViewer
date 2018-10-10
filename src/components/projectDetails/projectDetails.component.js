(function () {
    angular.module('app').component('projectDetails', {
        controllerAs: 'vm',
        controller: [
            '$scope', '$state', '$stateParams', '$http', 'operations',
            function ($scope, $state, $stateParams, $http, operations) {
                var ctrl = this;
                ctrl.user = "";
                ctrl.embed = {};
                ctrl.projects = [];
                ctrl.$onInit = function () {
                    ctrl.user = $stateParams.username;
                    if (ctrl.user) {
                        ctrl.load(ctrl.user);
                    }
                }

                ctrl.$onChanges = function (changes) {
                    if (ctrl.user) {
                        ctrl.load(ctrl.user);
                    }
                }


                ctrl.load = function (user) {
                    var url = operations.getRepoListUrl(user);
                    var loading = true;
                    $http.get(url).then(function (response) {
                        if(response.data.length > 0){
                            ctrl.projects = response.data;
                        }else{
                            swal("User Not found in github !!");
                        }
                        
                    }, function errorCallback(response) {
                        swal("User Not found in github !!");
                    }).finally(function () {
                        var loading = false;
                    });
                }
            }
        ],
        templateUrl: 'components/projectDetails/projectDetails.html'
    });
})();