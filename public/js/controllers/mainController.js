/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('mainCtrl', ['$http', '$scope', function($http, $scope){

  var mC = $scope;

  mC.myImage = '/images/myself.jpg';
  mC.myName = 'Alejandra Jurado';
  mC.myExperience = 'Full-Stack Web Dev';
  mC.parallaxBackground = '../images/technology.jpg';

}]);