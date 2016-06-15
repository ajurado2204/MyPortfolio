/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('aboutMeCtrl', ['$http', '$scope', function($http, $scope){

  var amC = $scope;

  amC.topic = 'About Me';
  amC.description = "I am a full-stack web developer, driven, self-motivated, curious, and very " +
    "passionate about web development. I enjoy work that challenges me to learn " +
    "something new and also strive to better myself as a developer. When I'm " +
    "not coding I enjoy playing Dragon Age: Inquisition which seems to be an endless " +
    "game. As well as watching shows online or drawing. Also browsing the web to " +
    "learn the latest web development techniques in order to provide the best quality in user experience.";
  amC.parallaxBackground = '../images/art-pencils.jpg';

}]);