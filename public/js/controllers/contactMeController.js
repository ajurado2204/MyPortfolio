/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('contactMeCtrl', ['$http', '$scope', function($http, $scope){

  var cmC = $scope;

  cmC.topic = 'Contact Me';
  cmC.myEmail = 'mailto:alejandra.jurado22@gmail.com';
  cmC.myLinkedInLink = 'https://www.linkedin.com/in/alejandrajurado';
  cmC.myLinkedInImage = '../images/webicon-linkedin.png';
  cmC.myGithubLink = 'https://www.github.com/ajurado2204';
  cmC.myGithubImage = '../images/GitHub-Mark.png';

}]);