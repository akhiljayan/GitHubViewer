(function () {
    angular.module('app').component('repoDetails', {
        bindings: {
            model: '<',
            user: '<',
            count: '<',
        },
        controllerAs: 'vm',
        controller: [
            '$scope', '$state', '$stateParams', 'operations', '$http', '$window',
            function ($scope, $state, $stateParams, operations, $http, $window) {
                var ctrl = this;
                ctrl.$onInit = function () {
                    // 
                }

                ctrl.$onChanges = function (changes) {}

                ctrl.showReadMe = function (repo, owner) {
                    var url = operations.getReadMeUrl(owner, repo);
                    $http.get(url).then(function (response) {
                        ctrl.readMeResp = response.data;
                        if (ctrl.readMeResp.html_url) {
                            $window.open(ctrl.readMeResp.html_url, '_blank');
                        } else {
                            swal("Count not find readme file!!")
                        }
                    }, function errorCallback(response) {
                        swal("Error Occured connecting to github !!")
                    }).finally(function () {});
                }
            }
        ],
        templateUrl: 'components/repoDetail/repoDetails.html'
    });
})();