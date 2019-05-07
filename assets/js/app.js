angular.module("myApp.controllers", []);
angular.module("myApp.models", []);
var myApp = angular.module("myApp", [
  "ui.router",
  "myApp.controllers",
  "myApp.models"
]);

// configure our routes
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "partials/home.html"
    })

    .state("about", {
      url: "/about-the-foundation",
      templateUrl: "partials/about.html"
    })

    .state("whatWeDo", {
      url: "/what-we-do",
      templateUrl: "partials/what-we-do.html"
    })

    .state("ourProjects", {
      url: "/our-projects",
      templateUrl: "partials/our-projects.html"
    })

    .state("theTeam", {
      url: "/the-team",
      templateUrl: "partials/the-team.html"
    })

    .state("gallery", {
      url: "/gallery",
      templateUrl: "partials/gallery.html"
    })

    .state("donor", {
      url: "/donor",
      templateUrl: "partials/donor.html"
    })

    .state("error", {
      url: "/error",
      templateUrl: "404.html"
    });
});
