(function () {
    'use strict';

    angular
        .module('app.members')
        .controller('MemberTabsCtrl', ['$scope', '$log', MemberTabsCtrl]);

    function MemberTabsCtrl($scope, $log) {
        var tabs = [
                {title: '基本信息', content: "Tabs will become paginated if there isn't enough room for them."},
                {title: '护理信息', content: "You can swipe left and right on a mobile device to change tabs."},
                {title: '联系人', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
                {title: '兴趣爱好', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
                {title: '饮食禁忌', content: "If you remove a tab, it will try to select a new one."},
                {title: '体格检查', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
                {title: '等级评估', content: "If you set ng-disabled on a tab, it becomes unselectable."}
            ],
            selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
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
