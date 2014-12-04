'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Complex Widget App', function() {

  describe('Widget list view', function() {
    var widgetList;
    var widgetDetail;

    beforeEach(function(){
      widgetList = new WidgetList();
      widgetDetail = new WidgetDetail();
      widgetList.get();
    });

    it('should list 2 widgets', function() {
      widgetList.checkWidgetCount();
    });

    it('should redirect the app root to the widget list', function() {
      widgetList.getAppRoot();
      browser.getLocationAbsUrl().then(function(url) {
          expect(url.split('#')[0]).toBe('/widgets');
      });
    });

    it('should link to the detail view', function() {
      widgetList.clickFirstWidget();
      widgetDetail.checkDetails();
    });

    it('should link to the new widget view', function() {
      widgetList.clickNew();
      expect(element(by.css('body > div')).getText()).toContain('Create New Widget');
    });
  });

  describe('Widget detail view', function() {
    var widgetDetail;
    var widgetList;

    beforeEach(function() {
      widgetDetail = new WidgetDetail();
      widgetList = new WidgetList();
      widgetDetail.get();
    });

    it('should display detail page with widgetId', function() {
      widgetDetail.checkDetails();
    });

    it('should link to the list view', function() {
      widgetDetail.clickList();
      widgetList.checkWidgetCount();
    });

    it('should allow deletion', function(){
      widgetDetail.clickDelete();
      widgetList.checkWidgetCount();
    });
  });

  describe('New Widget', function() {
    var widgetNew;
    var widgetList;

    beforeEach(function() {
      widgetNew = new WidgetNew();
      widgetList = new WidgetList();
      widgetNew.get();
    });

    it('should link to the list view', function() {
      widgetNew.clickList();
      widgetList.checkWidgetCount();
    });
  });
});

var WidgetNew = function(){
  this.get = function(){
    browser.get('/#/widgets/new');
  };

  this.clickList = function(){
    element(by.id('widgetListLink')).click();
  };
};

var WidgetList = function(){
  this.widgets = element.all(by.repeater('widget in widgets'));

  this.currentUrl = function(){
    browser.getCurrentUrl();
  }

  this.get = function(){
    browser.get('/#/widgets');
  };

  this.getAppRoot = function(){
    browser.get('index.html');
  };

  this.clickFirstWidget = function(){
    element(by.repeater('widget in widgets').row(0).column('name')).click();
  };

  this.clickNew = function(){
    element(by.id('newWidgetLink')).click();
  };

  this.checkWidgetCount = function(){
    expect(this.widgets.count()).toBe(2);
  };
};

var WidgetDetail = function(){
  this.get = function(){
    browser.get('/#/widgets/tonka');
  };

  this.clickList = function(){
    element(by.id('widgetListLink')).click();
  };

  this.clickDelete = function(){
    element(by.id('deleteWidget')).click();
    var alertDialog = browser.switchTo().alert();
      alertDialog.accept();
  };

  this.checkDetails = function(){
    expect(element(by.binding('widgetId')).getText()).toBe('tonka');
  };
};
