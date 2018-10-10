(function () {
    angular.module('app').component('userProfile', {
        bindings: {
            model: '<',
            user:'<',
        },
        controllerAs: 'vm',
        controller: [
            '$scope', '$state','$stateParams', 'operations',
            function ($scope, $state, $stateParams, operations) {
                var ctrl = this;
                ctrl.$onInit = function () {
                    if(ctrl.model && ctrl.model[0]){
                        ctrl.owner = ctrl.model[0].owner;
                    }
                }

                ctrl.$onChanges = function (changes) {
                    if(ctrl.model[0] && angular.equals(changes.model.previousValue,{}) && !angular.equals(changes.model.currentValue,{})){
                        ctrl.owner = ctrl.model[0].owner;
                    }    
                    if(ctrl.model[0] && !angular.equals(changes.model.previousValue,{}) && !angular.equals(changes.model.currentValue,{})){
                        ctrl.owner = ctrl.model[0].owner;
                    }
                }

                ctrl.gobackToHome = function(){
                    $state.go("home");
                }
            }
        ],
        templateUrl: 'components/userProfile/userProfile.html'
    });
})();