/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('mySkillsCtrl', ['$http', '$scope', function($http, $scope){

  var msC = $scope;

  msC.topic = 'Skills';
  msC.myResumeLink = 'https://drive.google.com/file/d/0BzP9eaRR3kRiMGNXMnp2WU9qX2M/view?usp=sharing';
  msC.htmlImage = '../images/html-5.png';
  msC.javascriptImage = '../images/javascript.png';
  msC.nodeImage = '../images/nodejs.png';
  msC.phpImage = '../images/php-logo.png';
  msC.cssImage = '../images/css-3.png';
  msC.angularImage = '../images/angular.png';
  msC.gitImage = '../images/githublogo.png';
  msC.parallaxBackground = '../images/code.jpg';

}]);