(function () {

    angular.module('app.i18n', ['pascalprecht.translate'])
        .config(['$translateProvider', i18nConfig])
        .controller('LangCtrl', ['$scope', '$translate', LangCtrl]);

    function i18nConfig($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('zh');
        $translateProvider.useSanitizeValueStrategy(null);
    }

    function LangCtrl($scope, $translate) {
        $scope.lang = '中文';
        $scope.setLang = setLang;
        $scope.getFlag = getFlag;

        function setLang(lang) {
            switch (lang) {
                case 'English':
                    $translate.use('en');
                    break;
                case '中文':
                    $translate.use('zh');
                    break;
            }
            return $scope.lang = lang;
        }

        function getFlag() {
            var lang;
            lang = $scope.lang;
            switch (lang) {
                case 'English':
                    return 'flags-american';
                    break;
                case '中文':
                    return 'flags-china';
                    break;
            }
        }
    }
})();
