var expect = chai.expect;

describe('NotesCtrl', function() {
  var $httpBackend, scope, createController, requestHandler;

  beforeEach(module('notepad', '/views/routes/notes.html'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    requestHandler = $httpBackend.when('GET', '/api/notes');

    var $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    scope = $rootScope.$new();

    createController = function() {
      return $controller('NotesCtrl', {'$scope': $rootScope});
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch notes', function() {
    requestHandler.respond([{title: 'note'}]);
    $httpBackend.expectGET('/api/notes');
    createController();
    $httpBackend.flush();

    expect(scope.notes).to.length(2);
    expect(scope.notes[0]).to.have.property('title', 'My note');
  });
});