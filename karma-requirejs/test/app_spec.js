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
		
		// Test Arguments by Tony
		
		it('2 + 2 = 4', function(){
			var addTwoAndTwo = 2 + 2;
			expect(addTwoAndTwo).toBe(4);
		});
		it('3 is greater than 2', function(){
			greaterOrLess = function(num1, num2) {
				if (num1 > num2) {
					return(num1 + " is greater than " + num2);
				} else {
					return(num2 + " is greater than " + num1);
				}
			};
			expect(greaterOrLess(3,2)).toBe('3 is greater than 2');
		});		
		it('truth is truth', function(){
		expect(true).toBe(true);
		});
	});

});

