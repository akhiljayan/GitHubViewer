(function () {
    angular.module('app').factory('operations', [
        '$state', '$filter', '$http',
        function ($state, $filter, $http) {
            var operations = {};

            operations.loading = false;

            var urlbase = "https://api.github.com/users/";
            var readmeUrlBase = "https://api.github.com/repos/";

            operations.getProjects = function (user) {
                var url = urlbase + user + "/repos";
                operations.loading = true;
                $http.get(url).then(function (response) {
                    return response.data;
                }, function errorCallback(response) {
                    swal("Error Occured connecting to github !!")
                }).finally(function () {
                    operations.loading = false;
                });
            }

            operations.getRepoListUrl = function (user) {
                return urlbase + user + "/repos";
            }

            operations.getReadMeUrl = function (owner, repo) {
                return readmeUrlBase + owner + "/" + repo + "/readme";
            }

            operations.decodeBase64 = function (code) {
                return false;
            }


            return operations;
        }
    ]);

})();