define(['app', 'jquery', 'lodash'], function(App, $, _) {

	describe('just checking', function() {

		it('works for app', function() {	
			var el = $('<div></div>');
			var app = new App(el);
			app.render();
			expect(el.text()).toEqual('require.js up and running');
		});
	
		it('works for underscore', function() {
			expect(_.size([1,2,3])).toEqual(3);
		});
		
		it('true equals true', function(){
			expect( true ).toEqual(true);
		});
		
	});

});

