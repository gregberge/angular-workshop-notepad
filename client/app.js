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
.value('notes', [
  {
    id: 1,
    title: 'My note',
    content: 'Content of my note'
  },
  {
    id: 2,
    title: 'My second note',
    content: 'Content of my second note'
  }
])
.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('notes', {
    url: '/notes',
    templateUrl: '/views/routes/notes.html',
    controller: function ($scope, notes) {
      $scope.notes = notes;
    }
  })
  .state('notes.detail', {
    url: '/:id',
    templateUrl: '/views/routes/notes/detail.html',
    controller: function ($stateParams, $scope, notes) {
      $scope.note = notes.filter(function (note) {
        return note.id + '' === $stateParams.id + '';
      })[0];
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