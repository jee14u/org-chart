// spec.js
describe('Org Chart homepage', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9000/');

    expect(browser.getTitle()).toEqual('Home | EMC Org Chart');
  });
});