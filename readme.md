[![https://nodei.co/npm/multi-select-angularjs.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/multi-select-angularjs.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/multi-select-angularjs)


[![HitCount](https://hits.dwyl.com/moshfeu/multi-select-angularjs.svg)](https://hits.dwyl.com/dwyl/start-here)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/moshfeu/multi-select-angularjs/issues)


An AngularJS directive for the plugin [multi-select](https://github.com/lou/multi-select)

__Table of content__

- [Demo](#demo)
- [Depenecies](#depenecies)
- [Installation](#installation)
- [Options / Events](#options-events)
- [Contributors](#contributors)

## Demo

<a href="https://moshfeu.github.io/multi-select-angularjs/demo/" target="_blank">Demo</a>

## Depenecies

- jQuery 1.8+
- angularjs
- jquery.multi-select.js

### Optinoal

- jquery.quicksearch.js ([docs](http://loudev.com/) - find the title `Searchable`)

## Installation

```shell
npm install multi-select-angularjs --save
```

```html
<link href="node_modules/multiselect/css/multi-select.css" rel="stylesheet" />

<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/angular/angular.min.js"></script>
<script src="node_modules/multiselect/js/jquery.multi-select.js"></script>
<script src="node_modules/jquery.quicksearch/dist/jquery.quicksearch.min.js"></script>
<script src="node_modules/multi-select-angularjs/dist/angular.multi-select.js"></script>
```


## Usage

**javascript**
```javascript
app.module('your-modoule', ['jq-multi-select']);
```
**html**
```html
<select multiple data-ng-options="option as option for option in options" data-ng-model="selectedOptions" data-multi-select="options"></select>
```
<hr />

## Options / Events

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

## contributors
@bigtree6688

License
============
[MIT](http://opensource.org/licenses/MIT) License.
