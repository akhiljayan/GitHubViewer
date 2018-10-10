(function () {
    angular.module('app').component('home', {
        controllerAs: 'vm',
        controller: [
            '$scope', '$state',
            function ($scope, $state) {
                var ctrl = this;
                ctrl.imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVV8Hj0q30GBzSOY9LNUHoqxi-ZT0m8oTlGATCMLhckN107LJ";
                ctrl.$onInit = function () {}

                ctrl.$onChanges = function (changes) {}

                ctrl.searchRepo = function(){
                    $state.go('showProjects',{'username':ctrl.username })
                }
            }
        ],
        templateUrl: 'components/home/home.html'
    });
})();