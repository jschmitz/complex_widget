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

module.exports = WidgetList;
