/*
 * Third party
 */

//  = ../../bower_components/jquery/dist/jquery.min.js
//  = ../../bower_components/slick-master/slick/slick.min.js
//  = ../../bower_components/jquery.scrollTo-2.1.2/jquery.scrollTo.min.js

/*
 * Custom
 */



window.onload = function() {
	// const loaderContent = document.getElementsByClassName('loader');
	// loaderContent[0].classList.add('is-hide');
	
	function initAccordion(accordionElem){
	
		//when panel is clicked, handlePanelClick is called.          
		function handlePanelClick(event) {
			showPanel(event.currentTarget);
		}
	
		//Hide currentPanel and show new panel.  
		function showPanel(panel){
			//Hide current if it's already has active class. 
			if (panel.classList.contains('accordion-active-item')) {
				panel.classList.remove('accordion-active-item');
			} else {
				//Hide active one.
				const expandedPanel = accordionElem.querySelector('.accordion-active-item');
					
				if (expandedPanel){
						expandedPanel.classList.remove('accordion-active-item');
				}
				//Show new one
				panel.classList.add('accordion-active-item');
			}
		}
	
		if (accordionElem)
		{
			const allPanelElems = accordionElem.querySelectorAll('.accordion-item');
	
			for (let i = 0, len = allPanelElems.length; i < len; i++){
				allPanelElems[i].addEventListener('click', handlePanelClick);
			}
			// //By Default Show first panel
			// showPanel(allPanelElems[0])
		}
	
	}
	
	const topImg = document.getElementsByClassName('top');
	
	const accordionElem = document.getElementById('services-accordion');
	
	if (accordionElem) {
		for (let i = 0, len = accordionElem.children.length; i < len; i++)
		{
			(function(index){
				accordionElem.children[i].onclick = function() {
					topImg[0].children[0].src = 'http://localhost:8888/img/services-' + i + '.jpg'
				}
			})(i);
		}
	}
		
		
	initAccordion(document.getElementById('services-accordion'));
	
	
	
	
	}
	// toggle gallery flow
	function galleryFour() {
		var element = document.getElementById('gallery');
		element.classList.remove('main-content-gallery-alt');
	}
	
	function galleryTwo() {
		var element = document.getElementById('gallery');
		element.classList.add('main-content-gallery-alt');
	}
	
	$(document).ready(function(){
	
		const siteHeaderNav = $( '.site-header__nav' );
	
		$( '.site-header__nav-ham-btn' ).on("click", function() {
			siteHeaderNav.toggleClass('site-header__mob-nav-active');
		});
	
	
	
		// front page text slider
		$( '.text-carousel' ).slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 500,
			fade: true,
			autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
		});
	
	
		$('.room-preview').on('init', function(event, slick){
			$('.num').text(1);
			$('.num').append('/<span>' + slick.slideCount + '</span>');
		});
	
		// rooms slider
		$( '.room-preview' ).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// lazyLoad: 'ondemand',
			dots: false,
			infinite: true,
			// autoplay: true,
			// autoplaySpeed: 4500,
			pauseOnHover: false
		});
	
	
	
		// On before slide change
		$('.room-preview').on('beforeChange', function(event, slick, currentSlide, nextSlide ){
			$('.num').text(nextSlide + 1);
			$('.num').append('/<span>' + slick.slideCount + '</span>');
		});
	
		$('.room-slider-nav p').click(function() {
			$('.room-preview').slick('slickGoTo',$(this).index());
			$('.room-slider-nav p').removeClass('active');
			$(this).addClass('active');
		})
	
	
	
		// rooms cat card slider
		const $window = $(window);
		const $slick_slider = $('.cat-room-slider');
	
	
		const settings = {
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			infinite: false,
			pauseOnHover: false,
		};
		// prevArrow: $('.rooms-cat-slider-nav-prev'),
		// nextArrow: $('.rooms-cat-slider-nav-next'),
		
		$slick_slider.slick(settings);
	
		$window.on('resize', function() {
			if ($window.width() < 1280) {
				if ($slick_slider.hasClass('slick-initialized'))
					$slick_slider.slick('unslick');
				return
			}
			if ( ! $slick_slider.hasClass('slick-initialized'))
				return $slick_slider.slick(settings);
		});
		
		const $status = $('.pagingInfo');
	
		//slick wheel scroll
		if ($window.width() > 1280) {
			$slick_slider.on('wheel', (function(e) {
				e.preventDefault();
				if (e.originalEvent.deltaY < 0) {
					$(this).slick('slickNext');
				} else {
					$(this).slick('slickPrev');
				}
				})
			);
		}
		 
		if ($window.width() < 1280) {
			if ($slick_slider.hasClass('slick-initialized'))
				$slick_slider.slick('unslick');
			return
		}
		if ( ! $slick_slider.hasClass('slick-initialized'))
			return $slick_slider.slick(settings);
	});
	
	function scrollingBy(pos, time) {
		var currentPos = window.pageYOffset;
		var start = null;
		if(time == null) time = 500;
		pos = +pos, time = +time;
		window.requestAnimationFrame(function step(currentTime) {
			start = !start ? currentTime : start;
			var progress = currentTime - start;
			if (currentPos < pos) {
				window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
			} else {
				window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
			}
			if (progress < time) {
				window.requestAnimationFrame(step);
			} else {
				window.scrollTo(0, pos);
			}
		});
	}