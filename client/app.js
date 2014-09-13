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
.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push(function (notes) {
    return {
      response: function(response) {
        // Replace data by mocked notes.
        if (response.config.url === '/api/notes')
          response.data = notes;

        return response;
      }
    };
  });

  $stateProvider
  .state('notes', {
    url: '/notes',
    templateUrl: '/views/routes/notes.html',
    controller: 'NotesCtrl'
  })
  .state('notes.detail', {
    url: '/:id',
    templateUrl: '/views/routes/notes/detail.html',
    controller: function ($stateParams, $scope, $http) {
      $http.get('/api/notes', {cache: true}).then(function (res) {
        $scope.note = res.data.filter(function (note) {
          return note.id + '' === $stateParams.id + '';
        })[0];
      });
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