// app.routes.js
(function () {

    var appModule = angular.module("app", [
        "ui.router",
        "base64"
    ]);

    appModule.config([
        '$stateProvider', '$urlRouterProvider', 
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");
            $stateProvider.state('home', {
                url: '/home',
                template: '<home></home>',
            });

            $stateProvider.state('showProjects', {
                url: '/projects/:username',
                template: '<project-details></project-details>'
            });
        }
    ]);

    appModule.run(["$rootScope", "$state",function ($rootScope, $state) {
        $rootScope.$state = $state;
        $rootScope.safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn && (typeof (fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    }]);
})();