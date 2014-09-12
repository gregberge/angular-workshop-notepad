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
  'ui.router',
  'notepad.constants',
  'notepad.services',
  'notepad.controllers',
  'notepad.filters',
  'notepad.directives'
])
.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('notes', {
    url: '/notes',
    template: 'All notes.'
  })
  .state('notesDetail', {
    url: '/notes/:id',
    template: 'Note id #{{noteId}}',
    controller: function ($stateParams, $scope) {
      $scope.noteId = $stateParams.id;
    }
  })
  .state('about', {
    url: '/about',
    template: 'Notepad application for Workshop.'
  });

  $urlRouterProvider.otherwise('/notes');
})
.run(function ($location) {
  if($location.path() === '/error') {
    $location
    .path('/')
    .replace();
  }
});