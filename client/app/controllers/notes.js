window.notepad.controllers.controller('NotesCtrl', function ($scope, Note) {
  $scope.notes = Note.query();
});