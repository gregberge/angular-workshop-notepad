window.notepad.controllers.controller('NotesCtrl', function ($scope, Note) {
  $scope.createNote = function () {
    $scope.notes.push($scope.note);
    $scope.note.$save();
    $scope.reset();
  };

  $scope.reset = function () {
    $scope.note = new Note();
  };

  $scope.notes = Note.query();
  $scope.reset();
});