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

module.exports = WidgetDetail;
