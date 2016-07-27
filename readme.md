An AngularJS directive for the plugin [multi-select](https://github.com/lou/multi-select)

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

    <select multiple="multiple" data-ng-options="the-options" data-ng-model="the-model" data-multiselectsearch="the-options"></select>

To Do
============
- Implement options
- Implement events

License
============
[MIT](http://opensource.org/licenses/MIT) License.