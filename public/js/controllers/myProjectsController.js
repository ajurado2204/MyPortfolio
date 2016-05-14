/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('myProjectsCtrl', ['$http', '$scope', function($http, $scope){

  var mpC = $scope;

  mpC.topics = 'My Projects!';

}]);