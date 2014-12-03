'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Complex Widget App', function() {

  describe('Widget list view', function() {

    beforeEach(function() {
      browser.get('/#/widgets');
    });

    it('should show 2 widgets', function() {
      var widgets = element.all(by.repeater('widget in widgets'));
      expect(widgets.count()).toBe(2);
    });


    it('should redirect index.html to <domain>#/widgets', function() {
      browser.get('index.html');
      browser.getLocationAbsUrl().then(function(url) {
          expect(url.split('#')[0]).toBe('/widgets');
      });
    });
  });

  describe('Widget detail view', function() {

    it('should display placeholder page with widgetId', function() {
      browser.get('/#/widgets/tonka');
      //browser.get('index.html#/widets/tonka');
      var e = element(by.binding('widgetId'));

      expect(e.getText()).toBe('tonka yo');
    });
  });
});
