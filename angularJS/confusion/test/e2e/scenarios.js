'use strict';

describe('confusion app e2e testing', function() {
    it('should automatically redirect to / when location hash/fragment is empty',
        function() {
            browser.get('index.html');
            expect(browser.getCurrentUrl()).toMatch("/");
    	});

    // describe('index', function() {
    //     beforeEach(function() {
    //         browser.get('index.html#/');
    //     });
    //     it('should have a title', function() {
    //         expect(browser.getTitle()).
    //         toEqual('Ristorante Con Fusion');
    //     });
    // });

});