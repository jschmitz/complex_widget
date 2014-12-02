'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Complex Widget App', function() {

  describe('Widget list view', function() {

    beforeEach(function() {
      browser.get('');
    });

    it('should show 2 widgets', function() {
      var widgets = element.all(by.repeater('widget in widgets'));
      expect(widgets.count()).toBe(2);
    });

  });
});
