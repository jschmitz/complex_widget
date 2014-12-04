var WidgetNew = function(){
  this.get = function(){
    browser.get('/#/widgets/new');
  };

  this.clickList = function(){
    element(by.id('widgetListLink')).click();
  };
};

module.exports = WidgetNew;
