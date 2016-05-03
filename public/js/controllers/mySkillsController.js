/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('mySkillsCtrl', ['$http', '$scope', function($http, $scope){

  var msC = $scope;

  msC.topics = 'My Skills!';

}]);