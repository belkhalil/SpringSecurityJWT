
angular.module('walletApp').directive('bDatepicker', function() {
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function($scope, element, attrs, controller) {
            var updateModel, onblur;

//            	$scope.dateOptions = {
//                        format: 'dd/mm/yyyy',
//                        autoclose: false,
//                        clearBtn: true,
//                        showOnFocus: true,
//                        todayBtn: true,
//                        todayHighlight: true,
//                        weekStart: 1,
//                        zIndexOffset: 5000
//                    }



            if (controller != null) {

                updateModel = function(event) {

                    element.datepicker('hide');
                    element.blur();
                };

                onblur = function() {
                    var date = element.val();
                    return $scope.$apply(function() {
                        return controller.$setViewValue(date);
                    });
                };

                controller.$render = function() {
                    var date = controller.$viewValue;

                    date = new Date(date);

                    if (angular.isDefined(date) && date != null && angular.isDate(date)) {
                        // element.datepicker().data().datepicker.date = date;

                        element.datepicker('update', date);
                        element.datepicker('setValue');
                        element.datepicker('update');

                    } else if (angular.isDefined(date)) {
                        throw new Error('ng-Model value must be a Date object - currently it is a ' + typeof date + ' - use ui-date-format to convert it from a string');
                    }
                    return controller.$viewValue;
                };
            }
            return attrs.$observe('bDatepicker', function(value) {
                var options;
                options = {}; //<--- insert your own defaults here!
                if (angular.isObject(value)) {
                    options = value;
                }
                if (typeof(value) === "string" && value.length > 0) {
                    options = angular.fromJson(value);
                }
                return element.datepicker(options).on('changeDate', updateModel).on('blur', onblur);
            })
        }
    }
});
