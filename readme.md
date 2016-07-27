An AngularJS directive for the plugin [multi-select](https://github.com/lou/multi-select)

[Demo](http://htmlpreview.github.io/?https://github.com/moshfeu/multi-select-angularjs/blob/master/demo/index.html)

Depenecies
============
- jQuery 1.8+
- jquery.multi-select.js 

Optinoal
============
- jquery.quicksearch.js ([docs](http://loudev.com/) - find the title `Searchable`)


Usage
============

**javascript**
```javascript
app.module('your-modoule', ['jq-multi-select']);
```    
**html**
```html
<select multiple data-ng-options="option as option for option in options" data-ng-model="selectedOptions" data-multi-select="options"></select>
```
<hr />

options / events
---------------------------

Pass the options ([docs](http://loudev.com/) - find the title `options`) object into `ms-options` attribute.

**javascript**
```javascript
$scope.msOptions = {
    afterInit: function (container) {
        console.log('afterInit');
    }
};
``` 
**html**
```html
<select multiple data-ng-options="option as option for option in options" data-ng-model="selectedOptions3" data-multi-select="options" data-ms-options="msOptions2"></select>
```

License
============
[MIT](http://opensource.org/licenses/MIT) License.