/**
 * Created by Ale on 5/2/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('aboutMeCtrl',['$location', function($location){

  var amC = this;
  amC.tagline = 'To the moon and back!';
}]);
