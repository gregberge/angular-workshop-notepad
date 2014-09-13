window.notepad.controllers.controller('NotesCtrl', function ($scope, Note, $state) {
  $scope.createNote = function () {
    $scope.notes.push($scope.note);
    $scope.note.$save().then(function (note) {
      $state.go('notes.detail', {id: note.id});
    });
    $scope.reset();
  };

  $scope.reset = function () {
    $scope.note = new Note();
  };

  $scope.notes = Note.query();
  $scope.reset();
});