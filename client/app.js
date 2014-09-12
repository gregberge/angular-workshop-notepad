// Create sub-modules.
window.notepad = {
  constants: angular.module('notepad.constants', []),
  services: angular.module('notepad.services', []),
  controllers: angular.module('notepad.controllers', []),
  filters: angular.module('notepad.filters', []),
  directives: angular.module('notepad.directives', [])
};

// Create main module.
window.notepad.app = angular.module('notepad', [
  'ngRoute',
  'notepad.constants',
  'notepad.services',
  'notepad.controllers',
  'notepad.filters',
  'notepad.directives'
])
.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/notes', {
    template: 'All notes.'
  })
  .when('/notes/:id', {
    template: 'Note id #{{noteId}}',
    controller: function ($routeParams, $scope) {
      $scope.noteId = $routeParams.id;
    }
  })
  .when('/about', {
    template: 'Notepad application for Workshop.'
  })
  .otherwise({
    redirectTo: '/notes'
  });
})
.run(function ($location) {
  if($location.path() === '/error') {
    $location
    .path('/')
    .replace();
  }
});