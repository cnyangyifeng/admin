(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                var routes, setRoutes;

                routes = [
                    'ui/cards', 'ui/typography', 'ui/buttons', 'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components', 'ui/timeline', 'ui/lists', 'ui/pricing-tables',
                    'map/maps',
                    'table/static', 'table/dynamic', 'table/responsive',
                    'form/elements', 'form/layouts', 'form/validation', 'form/wizard',
                    'chart/echarts', 'chart/echarts-line', 'chart/echarts-bar', 'chart/echarts-pie', 'chart/echarts-scatter', 'chart/echarts-more',
                    'app/calendar',

                    'beds/bed', 'beds/beds',
                    'financials/payments',
                    'hr/employees', 'hr/employee',
                    'members/members', 'members/member',
                    'page/404', 'page/500', 'page/forgot-password', 'page/invoice', 'page/profile', 'page/signin', 'page/signup',
                    'promotions/bookings', 'promotions/wechat',
                    'reception/visit',
                    'statistics/beds', 'statistics/financials', 'statistics/hr', 'statistics/members', 'statistics/overview',
                    'system/logs', 'system/privileges', 'system/settings', 'system/users'
                ];

                setRoutes = function (route) {
                    var config, url;
                    url = '/' + route;
                    config = {
                        url: url,
                        templateUrl: 'app/' + route + '.html'
                    };
                    $stateProvider.state(route, config);
                    return $stateProvider;
                };

                routes.forEach(function (route) {
                    return setRoutes(route);
                });

                $urlRouterProvider
                    .when('/', '/dashboard')
                    .otherwise('/dashboard');

                $stateProvider.state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html'
                });
            }]
        );
})();
