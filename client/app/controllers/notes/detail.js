window.notepad.controllers.controller('NotesDetailCtrl', function ($stateParams, $scope, $state, Note) {
  $scope.note = Note.get({id: $stateParams.id});
  $scope.delete = function () {
    $scope.note.$delete().then(function () {
      $scope.$emit('noteDeleted', $scope.note.id);
      $state.go('notes');
    });
  };
});