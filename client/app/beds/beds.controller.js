(function () {
    'use strict';

    angular
        .module('app.beds')
        .controller('BedsTabsCtrl', ['$scope', '$log', BedsTabsCtrl]);

    function BedsTabsCtrl($scope, $log) {
        var tabs = [
                {title: '#1', content: "一号楼"},
                {title: '#2', content: "二号楼"},
                {title: '#3', content: "三号楼"},
                {title: '#4', content: "四号楼"},
                {title: '#5', content: "五号楼"},
                {title: '#6', content: "六号楼"},
                {title: '#7', content: "七号楼"}
            ],
            selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
        $scope.$watch('selectedIndex', function (current, old) {
            previous = selected;
            selected = tabs[current];
            // if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
            // if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
        });
        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({title: title, content: view, disabled: false});
        };
        $scope.removeTab = function (tab) {
            var index = tabs.indexOf(tab);
            tabs.splice(index, 1);
        };
    }
})();
