/**
 * Created by Frischman on 2017-01-12.
 */

















var app = angular.module('tataSite', []);

app.controller('tataCtrl', function ($scope, $http) {
    $scope.searchOption = {
        'wikipedia': null,
        'google': null,
        'youtube': null,
        'new_york_times': null,
        'summary': null,
        'reference': null,
        'patents': null
    };
    $scope.loading = false;
    $scope.links = {};
    $scope.search = function () {
        $scope.loading = true;
        var sitesToSearch = Object.keys($scope.searchOption);
        $scope.results = [];
        angular.forEach(sitesToSearch, function (site) {
            $scope.site = site;
            $http.get('https://tata-contest.herokuapp.com/' + site +'/' + $scope.searchQuery).then(function (data) {
                console.log(data.data);
                $scope.results.push(data.data);
                $scope.links[site] = data.data[site];
            })
        });
        console.log($scope.results);

        console.log(Object.keys($scope.searchOption));
        $scope.loading = false;
        $scope.searchOption = {};

    };

    $scope.selectAll = function () {
        console.log($scope.searchOption.selectAll)

        if ($scope.searchOption.selectAll) {
            angular.forEach(Object.keys($scope.searchOption), function (site) {
                $scope.searchOption[site] = true;
            } )
        }
        else {
            angular.forEach(Object.keys($scope.searchOption), function (site) {
                $scope.searchOption[site] = false;
            } )
        }
    }




})