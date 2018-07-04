angular.module('myApp', []).controller('pplCtrl', function($scope) {
    $scope.people = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});
