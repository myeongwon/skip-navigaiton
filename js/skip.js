(function(global, $, undefined){
	'use strict';
	
	// jQuery 의존도 체크
	if(!$) { throw console.error('jQuery에 의존하는 라이브러리입니다.')}

	// 스킵 내비게이션 요소에 클래스 설정
	var $skip = $('#skip-navigation').addClass('skip-nav');
	// 스킵 내비게이션 요소의 링크에 클래스 설정
	var $skip_links = $skip.find('a').addClass('a11y-hidden focusable');


	// 시작 : options.cosutomClass 값이 거짓(false)이면 아래 코드 실행 
	var a11y_hidden_class = {
		'overflow' : 'hidden',
		'position' : 'absolute',
		'clip' : 'rect(0 0 0 0)'
		'clip': 'rect(0, 0, 0, 0)' 
		'width': '1px',
		'height': '1px',
		'margin': '-1px',
		'padding': 0,
		'border': 0;
	}

	var a11y_hidden_class_focusable = {
		'overflow' : 'visible',
		'position' : 'static',
		'clip' : 'auto',
		'width': 'auto',
		'height': 'auto',
		'margin': 0;
	}
	option.customClass || $skip_links.css(a11y_hidden_class)
	.on('focus', function(ev){
		$(this).css(a11y_hidden_class_focusable);
	}).on('blur', function(ev){
		$(this).css(a11y_hidden_class);
	});

	// 스킵 내비게이션 요소의 링크 클릭 이벤트 설정
	// 이벤트의 위임.
	$skip.on('click', 'a', function(ev){
		// 브라우져 기본 동작 차단
		ev.preventDefault();
		// href 속성 값 참조
		var href = ev.target.getAttribute('href');
		// 목표지가 되는  jquery 인스턴스 객체 참조
		var $target = $(href);
		// tabindex 속성 설정 및 포커스 적용
		$(target).attr('tabindex', -1).focus();
	});
	



})(window, window.jQuery);