window.notepad.controllers.controller('NotesCtrl', function ($scope, $http) {
  $http.get('/api/notes', {cache: true}).then(function (res) {
    $scope.notes = res.data;
  });
});