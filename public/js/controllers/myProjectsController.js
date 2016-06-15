/**
 * Created by Ale on 5/3/16.
 */
var app = angular.module('myPortfolioApp');

app.controller('myProjectsCtrl', ['$http', '$scope', function($http, $scope){

  var mpC = $scope;

  mpC.topic = 'Projects';
  mpC.githubLink = 'Github Link';

  mpC.liveCatalog = '../images/live-catalog.png';
  mpC.liveCatalogTitle = 'Live Catalog';
  mpC.liveCatalogDescription = 'A web application that displays all New York Times Best Sellers books, along with links to Ebay.com and Amazon.com which allows users to buy their favorite books. HTML, CSS, Bootstrap, JavaScript, AJAX, JSON';
  mpC.liveCatalogLink = 'https://github.com/ajurado2204/8-0project';

  mpC.oneView = '../images/one-view.png';
  mpC.oneViewTitle = 'One-View';
  mpC.oneViewDescription = 'A web application that allows users to display content from three different social networks.' +
    'Displays Slacks incoming messages, Gmail display all unread emails, and for Twitter it ' +
    'displays the 5 most recent twitter feeds from your home timeline in one single page. HTML, CSS, Materialize, ' +
    'JavaScript, AngularJS, NodeJS';
  mpC.oneViewLink = 'https://github.com/ajurado2204/one-messaging';

  mpC.rpsGame = '../images/RockPaperScissors.png';
  mpC.rpsGameTitle = 'Rock Paper Scissors';
  mpC.rpsGameDescription = 'Simple Rock Paper Scissors Game.';
  mpC.rpsGameLink = 'https://github.com/ajurado2204/RockPaperScissor';

  mpC.rutgersFlyer = '../images/rutgersFlyer.png';
  mpC.rutgersFlyerTitle = 'Rutgers Flyer';
  mpC.rutgersFlyerDescription = 'A web application that allows users to add locations specifically around Rutgers. It allows logged in users to add locations and insert reviews and ratings for a location. HTML, CSS, Materialize, JavaScript, NodeJS';
  mpC.rutgersFlyerLink = 'https://github.com/ajurado2204/rutgersflyer';

  mpC.parallaxBackground = '../images/notebook.jpg';
}]);