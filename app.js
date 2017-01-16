var app = angular.module('tataSite', []);

app.controller('tataCtrl', function ($scope, $http) {
    $scope.searchOption = {};
    $scope.links = {};
    $scope.search = function () {
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
        $scope.searchOption = {};
    };

})