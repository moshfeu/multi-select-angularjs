An AngularJS directive for the plugin [multi-select](https://github.com/lou/multi-select)

[Demo](http://htmlpreview.github.io/?https://github.com/moshfeu/multi-select-angularjs/blob/master/demo/index.html)

Depenecies
============
- jQuery 1.8+
- jquery.multi-select.js 

Optinoal
============
- jquery.quicksearch.js ([more info](http://loudev.com/) find the title `Searchable`)


Usage
============

**javascript**

    app.module('your-modoule', ['jq-multi-select']);
    
**html**

    <select multiple data-ng-options="option as option for option in options" data-ng-model="selectedOptions"></select>

<hr />

options / events
---------------------------

**javascript**

    $scope.msOptions = {
        afterInit: function (container) {
            console.log('afterInit');
        }
    };
    
**html**

    <select multiple data-ng-options="option as option for option in options" data-ng-model="selectedOptions" data-multi-select="options"></select>


License
============
[MIT](http://opensource.org/licenses/MIT) License.