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
  'notepad.constants',
  'notepad.services',
  'notepad.controllers',
  'notepad.filters',
  'notepad.directives'
])
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})
.run(function ($location) {
  if($location.path() === '/error') {
    $location
    .path('/')
    .replace();
  }
});