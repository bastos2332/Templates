// No Conflict
jQuery.noConflict();

// JustWrite Scripts
(function( $ ) {
	
	// Menu Drop-Down
	$('.superfish').superfish({ 
		delay:				300,
		speed:				'fast', 
		animation:			{opacity:'show',height:'show'},
		dropShadows:		false,
		cssArrows:			false,
		autoArrows:			true 
	});
	
	
	// Responsive Videos
	$('.single-content, .sidebar').fitVids();
	
	
	// Mobile menus
	$(document).on('click', '.mobile-menu-button', function(event) {
		$('.mobile-menu-button').toggleClass('activated').find('i').toggleClass('fa-navicon fa-times');
		$('.menu-main').toggleClass('menu-visible');
		$('.mobile-menu').find('li.mobile-drop-down').removeClass('mobile-drop-down');
		$('.mobile-menu').find('i').removeAttr('class').addClass('fa fa-angle-right');
		close_mini_sidebar();
		close_search_box();
		
		event.preventDefault();
	});
	
	$(document).on('click', '.mobile-menu .sf-sub-indicator', function(event) {
		$(this).parent().parent().toggleClass('mobile-drop-down')
		.children().find('.mobile-drop-down')
		.removeClass('mobile-drop-down')
		.find('i').toggleClass('fa-angle-down fa-angle-right');
		
		$(this).find('i').toggleClass('fa-angle-right fa-angle-down')

		event.preventDefault();
	});
	
	$(document).on('click', '.mobile-menu-button-2', function(event) {
		$('.mobile-menu-button-2').toggleClass('activated').find('i').toggleClass('fa-navicon fa-times');
		$('.second-menu').toggleClass('menu-visible-2');
		$('.mobile-menu-2').find('li.mobile-drop-down').removeClass('mobile-drop-down');
		$('.mobile-menu-2').find('i').removeAttr('class').addClass('fa fa-angle-right');
		close_mini_sidebar();
		close_search_box();
		close_mobile_menu();
		
		event.preventDefault();
	});
	
	$(document).on('click', '.mobile-menu-2 .sf-sub-indicator', function(event) {
		$(this).parent().parent().toggleClass('mobile-drop-down')
		.children().find('.mobile-drop-down')
		.removeClass('mobile-drop-down')
		.find('i').toggleClass('fa-angle-down fa-angle-right');
		
		$(this).find('i').toggleClass('fa-angle-right fa-angle-down')

		event.preventDefault();
	});

	function close_mobile_menu() {
		$('.mobile-menu-button').removeClass('activated').find('i').removeClass().addClass('fa fa-navicon');
		$('.menu-main').removeClass('menu-visible');
		$('.mobile-menu').find('li.mobile-drop-down').removeClass('mobile-drop-down');
		$('.mobile-menu').find('i').removeAttr('class').addClass('fa fa-angle-right');
	}
	// -------------
	
	
	// Search Button
	$(document).on('click', '.search-button, .try-a-search', function(event) {
		$('.search-button').toggleClass('activated').find('i').toggleClass('fa-search fa-times');
		$('.search-wrap').toggleClass('search-visible');
		$('#header-search .search-field').val('').focus();
		close_mini_sidebar();
		close_mobile_menu();
		event.preventDefault();
	});
	
	function close_search_box() {
		$('.search-button').removeClass('activated');
		$('.search-button').find('i').removeClass().addClass('fa fa-search');
		$('.search-wrap').removeClass('search-visible');
		$('#header-search .search-field').blur();
	}
	// -------------
	
	
	// Back To Top
	$(".back-to-top").click(function () {
		$("html, body").animate({scrollTop: 0}, 50);
	});
	// -------------
	
	
	// Tabs Widget
	function initTabsFirst() {
		$('.ac-tabs-init-wrap').each( function() {
			$(this).find('.ac-tabs-init a').parent('li').first().addClass('selected');
			$(this).find('.tabs-widget-tab').first().css('display', 'block');
		});
	}
	initTabsFirst();
	
	$('.ac-tabs-init a').click(function(event) {
		event.preventDefault();
		var thisClick 	= $(this);
		var acTabsID 	= $(this).parent('li')
						.parent('.ac-tabs-init')
						.parent('.tabs-widget-navigation')
						.parent().attr('id');
						
		$('#' + acTabsID + ' .ac-tabs-init a').parent().addClass('selected');
		
		thisClick.parent().siblings().removeClass('selected');
		
		var getTabID = thisClick.attr('href');
		
		$('#' + acTabsID + ' .tabs-widget-tab').not(getTabID).css('display', 'none');
		
		$(getTabID).fadeIn();
  
	});
	// -------------
	
	
	// Browse
	$(document).on('click', '#browse-more', function(event) {
		var cwp = $('.container.main-section').position();
		var cwp_total = cwp.top - parseInt($('.mini-sidebar').css('padding-top')) + parseInt($('.container.main-section').css('border-top-width')) + 1;
		$(this).toggleClass('activated');
		$('.mini-sidebar').toggleClass('browse-window-opened');
		$('.mini-sidebar').css({ 
			'display': 'block',
			'position':	'absolute'
		});
		if ($('.mini-sidebar').hasClass('browse-window-opened')) {
			$("html, body").animate({scrollTop: cwp_total}, 300);
		} else {
			$('.mini-sidebar').removeAttr('style');	
		}
		close_search_box();
		close_mobile_menu();
		event.preventDefault();
	});
	
	function close_mini_sidebar() {
		$('.mini-sidebar').removeClass('browse-window-opened');
		$('#browse-more').removeClass('activated');
		$('.mini-sidebar').removeAttr('style');
	}
	
	$(document).on('click', '.close-browse-by', function(event) {
		close_mini_sidebar();
		close_mobile_menu();
		event.preventDefault();
	});
	// -------------
	
	
	// Posts - Template 1 - Share Article
	$(document).on('click', '.post-share-temp1', function(event) {
		var share_id = $(this).attr('id');
		var share_wrap_width = $('.post-template-1 .details').width() - 50;
		$(this).css('display', 'none');
		$('#' + share_id + '-rm').css('margin-right', 48);
		$('#' + share_id + '-wrap').addClass('opened').css('height', 50).animate({
			'width': '92%'
			}, 500, function() { 
				$('#' + share_id + '-wrap .contents').css('display','block').animate({ 
					'opacity': 1,		
				}, 300);
		});
		event.preventDefault();
	});
	
	$(document).on('click', '.close-this-temp1', function(event) {
		var share_href = $(this).attr('href');
		var share_href_wrap = $(this).attr('href') + '-wrap';
		$(share_href_wrap + ' .contents').animate({ 
			'opacity': 0		
			}, 300, function(){ 
				$(this).css('display','none')
				$(share_href_wrap).animate({
					'width': 48,
					'height': 'auto'	
				}, 300, function(){ 
					$(share_href_wrap).removeClass('opened')
					$(share_href + '-rm').css('margin-right', 0);
					$(share_href).css('display', 'block'); 
				});
			});
		event.preventDefault();
	});
	// -------------
	
	
	// Remove Tag Style (widget)
	$('.tagcloud a').removeAttr('style');
	// -------------
	
	
	// Sticky Menu
	function sticky_menu() {
		var nav = $('.menu-wrap');
		
		nav_scrolled = false;
		spo_scrooled = false;
			
		if( !nav.hasClass('sticky-disabled') ) {
			if( $(window).width() > 1140 ) {
				$(window).scroll(function () {
					if (220 <= $(window).scrollTop() && !nav_scrolled && $(window).width() > 1140) {
						if( $('body').hasClass('admin-bar') ) {
							nav.removeAttr('style').addClass('visible').css('top', 28);
						} else {
							nav.removeAttr('style').addClass('visible')
						}
						nav_scrolled = true;
					}
					if (220 >= $(window).scrollTop() && nav_scrolled) {
						if( $('body').hasClass('admin-bar') ) {
							nav.removeClass('visible').css('top', 0);
						} else {
							nav.removeClass('visible');
						}
						nav_scrolled = false;      
					}
					if (320 <= $(window).scrollTop() && !spo_scrooled) {
						if( ! $('.header-social-icons').hasClass('show') ) {
							$('.header-social-icons').css('display', 'block').animate({'marginRight': 0}, 100);
						}
						spo_scrooled = true;
					}
					if (320 >= $(window).scrollTop() && spo_scrooled) {
						if( ! $('.header-social-icons').hasClass('show') ) {
							$('.header-social-icons').animate({
								'marginRight': 20
							}, 100, function() { 
								$('.header-social-icons').hide().css({
									'marginRight': 0	
								});
							}).show();
						}
						spo_scrooled = false;      
					}
				});
			} else {
				$('.menu-wrap').removeClass('visible'),
				nav_scrolled = false,
				$('.header-social-icons').removeAttr('style'),
				spo_scrooled = false;
			}
		}
		
		
	}
	sticky_menu();
	if( $('body').hasClass('admin-bar') ) { $('.visible').css('top', 100); }
	// -------------
	
	
	// Cover - Parallax Opacity
	function ac_ParallaxOpacity(ac_lastScrollTop) {
		var scrollPos = $(this).scrollTop();
		if( scrollPos >= ac_lastScrollTop ) {
			$('.pl-info').css({
				  'opacity' : 1-(scrollPos/510)
			});
		} else {
			$('.pl-info').css({ 'opacity' : 1 });
		}
	}
	// -------------
	
	
	// On Window Resize
	$(window).resize(function() {
		
		if( $(window).width() >= 1600 ) {
			$('.mini-sidebar').removeClass('browse-window-opened');
			$('#browse-more').removeClass('activated');
			$('.mini-sidebar').removeAttr('style');
		}

		sticky_menu();
		
	});
	// -------------
	
	
	// On Window Scroll
	$(window).scroll(function(){
		if ( $( '.post-layout-cover.with-parallax' ).length ) {
			var ac_lastScrollTop = $('.post-layout-cover').offset().top;
			ac_ParallaxOpacity(ac_lastScrollTop);
		}
	});
	// -------------
	
	
	// On Window Load
	$(window).load(function(){
		
		if( $('#ac-preloader').hasClass('ac-preloader-demo') ) {
			// Just for the demo
			$('#ac-preloader').delay( 5000 ).fadeOut('slow',function(){$(this).remove();});
		} else {
			// Real one
			$('#ac-preloader').fadeOut('slow',function(){$(this).remove();});
		}
		
	});
	// -------------
	
})(jQuery);