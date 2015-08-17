(function(global, $, undefined){
	'use strict';
	/* ********************
		*
		* 문서 객체 참조 
		*
	******************** */
	var $skip = $('#skip-navigation');

	// var $skip_links = $skip.find('a').wrapAll('<ul>').wrap('<li>'); 
	// console.log($skip_links);
	var $skip_links = $skip.addClass('skip-content').find('a').addClass('a11y-hidden focusable');

	$skip_links.on('click', function(e){
		e.preventDefault();
 
		// 포커스가 이동해야 할 목적지????
		// e.taget <a href="#header">
		var $target = $(e.target.getAttribute('href'));
			$target.attr('tabindex', -1).focus();
	});


})(window, window.jQuery);