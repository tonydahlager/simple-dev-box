requirejs.config({
	paths: {
		'jquery'	: '../lib/jquery', 
		'lodash': '../lib/lodash.compat'
	},

	shim: {
		'lodash': {
			exports: '_'
		}
	}
});
