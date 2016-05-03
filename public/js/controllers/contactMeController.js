/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('contactMeCtrl', ['$http', '$scope', function($http, $scope){

  console.log("Here");
  var cmC = $scope;

  cmC.topics = 'Contact Me!';

}]);