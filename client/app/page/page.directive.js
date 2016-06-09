(function () {
    'use strict';

    angular.module('app.page')
        .directive('customPage', customPage);

    // Add class for specific pages to achieve fullscreen, custom background etc.
    function customPage() {
        return {
            restrict: 'A',
            controller: ['$scope', '$element', '$location', CustomPageCtrl]
        };

        function CustomPageCtrl($scope, $element, $location) {
            var addBg, path;

            path = function () {
                return $location.path();
            };

            addBg = function (path) {
                $element.removeClass('on-canvas');
                $element.removeClass('body-wide body-err body-auth');
                switch (path) {
                    case '/404':
                    case '/page/404':
                    case '/page/500':
                        return $element.addClass('body-wide body-err');
                    case '/page/signin':
                    case '/page/signup':
                    case '/page/forgot-password':
                        return $element.addClass('body-wide body-auth');
                }
            };

            addBg($location.path());

            $scope.$watch(path, function (newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                return addBg($location.path());
            });
        }
    }
})();


