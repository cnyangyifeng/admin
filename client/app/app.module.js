(function () {
    'use strict';

    angular.module('app', [
        // Core modules
        'app.core'

        // Custom Feature modules
        // , 'app.chart'
        // , 'app.ui'
        // , 'app.ui.form'
        // , 'app.ui.form.validation'
        , 'app.page'
        // , 'app.table'

        // Business modules
        , 'app.beds'
        , 'app.members'
        , 'app.reception'

        // 3rd party feature modules
        // , 'mgo-angular-wizard'
        // , 'ui.tree'
        // , 'ngMap'
        // , 'textAngular'
    ]);
})();

