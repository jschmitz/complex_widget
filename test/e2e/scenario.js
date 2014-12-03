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

    it('should link to the detail view', function() {
      var widgetsURL = browser.getCurrentUrl();

      var widgetName = element(by.repeater('widget in widgets').row(0).column('name'));
      widgetName.click();

      expect(browser.getCurrentUrl()).not.toEqual(widgetsURL);
    });

    it('should link to the new widget view', function() {
      var widgetsURL = browser.getCurrentUrl();
      element(by.id('newWidgetLink')).click();
      expect(element(by.css('body > div')).getText()).toContain('Create New Widget');
    });
  });

  describe('Widget detail view', function() {
    beforeEach(function() {
      browser.get('/#/widgets/tonka');
    });

    it('should display placeholder page with widgetId', function() {
      browser.get('/#/widgets/tonka');
      expect(element(by.binding('widgetId')).getText()).toBe('tonka');
    });

    it('should link to the list view', function() {
      var widgetsURL = browser.getCurrentUrl();
      element(by.id('widgetListLink')).click();
      expect(browser.getCurrentUrl()).not.toEqual(widgetsURL);
    });

    it('should allow deletion', function(){
      element(by.id('deleteWidget')).click();
      var alertDialog = browser.switchTo().alert();
      alertDialog.accept();
      expect(element(by.css('body > div > h1')).getText()).toContain('Widget List');
    });
  });

  describe('New Widget', function() {
    beforeEach(function() {
      browser.get('/#/widgets/new');
    });

    it('should link to the list view', function() {
      var widgetsURL = browser.getCurrentUrl();
      element(by.id('widgetListLink')).click();
      expect(element(by.css('body > div > h1')).getText()).toContain('Widget List');
    });
  });
});
