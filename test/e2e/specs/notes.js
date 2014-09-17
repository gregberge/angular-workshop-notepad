describe('notes', function() {
  it('should add a note', function() {
    browser.get('http://localhost:3000/notes');

    element(by.css('toggle-btn button')).click();
    element(by.model('note.title')).sendKeys('Good note');
    element(by.model('note.content')).sendKeys('Hello');
    element(by.css('[type=submit]')).click();

    var noteList = element.all(by.repeater('note in notes'));
    expect(noteList.count()).toEqual(3);
    expect(noteList.get(2).getText()).toEqual('Good note');
  });
});