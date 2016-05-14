/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('aboutMeCtrl', ['$http', '$scope', function($http, $scope){

  console.log("Here");
  var amC = $scope;

  amC.topic = 'About Me!';

}]);