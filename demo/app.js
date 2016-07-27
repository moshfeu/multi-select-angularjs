angular.module('demo', ['jq-multi-select']).
controller('ctrl', ['$scope', '$http', function ($scope, $http) {
    $scope.options = [
        'option1',
        'option2',
        'option3'
    ];

    $scope.selectedOptions4 = ['option2', 'option3'];

    $scope.loadOptions = function () {
        $http.get('data/data.json').then(function (res) {
            $scope.optionsRemote = res.data;
            $scope.selectedOptions5 = ['option1'];
        });
    };

    $scope.msOptions1 = {
        afterInit: function (container) {
            console.log('afterInit');
        },
        keepOrder: true
    };

    $scope.msOptions2 = {
        selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
        selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                .on('keydown', function (e) {
                    if (e.which === 40) {
                        that.$selectableUl.focus();
                        return false;
                    }
                });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                .on('keydown', function (e) {
                    if (e.which == 40) {
                        that.$selectionUl.focus();
                        return false;
                    }
                });

            that.$element.data('multiSelect', that);
        },
        afterSelect: function () {
            this.qs1.cache();
            this.qs2.cache();
        },
        afterDeselect: function () {
            this.qs1.cache();
            this.qs2.cache();
        }
    };
}]);