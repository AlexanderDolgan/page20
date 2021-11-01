window.onload = function() {
// const loaderContent = document.getElementsByClassName('loader');
// function isHide () {
// 	loaderContent[0].classList.add('is-hide');
// }

// setTimeout(isHide, 5000);

// function initAccordion(accordionElem){

// 	//when panel is clicked, handlePanelClick is called.          
// 	function handlePanelClick(event) {
// 		showPanel(event.currentTarget);
// 	}

// 	//Hide currentPanel and show new panel.  
// 	function showPanel(panel){
// 		//Hide current if it's already has active class. 
// 		if (panel.classList.contains('accordion-active-item')) {
// 			panel.classList.remove('accordion-active-item');
// 		} else {
// 			//Hide active one.
// 			const expandedPanel = accordionElem.querySelector('.accordion-active-item');
				
// 			if (expandedPanel){
// 					expandedPanel.classList.remove('accordion-active-item');
// 			}
// 			//Show new one
// 			panel.classList.add('accordion-active-item');
// 		}
// 	}

// 	const allPanelElems = accordionElem.querySelectorAll('.accordion-item');

// 	for (let i = 0, len = allPanelElems.length; i < len; i++){
// 				allPanelElems[i].addEventListener('click', handlePanelClick);
// 	}
// 	// //By Default Show first panel
// 	// showPanel(allPanelElems[0])

// }
// initAccordion(document.getElementById('services-accordion'));






// const topImg = document.getElementsByClassName('top');

// console.log(topImg[0].children[0].src);

// const accordionElem = document.getElementById('services-accordion');

// for (let i = 0, len = accordionElem.children.length; i < len; i++)
// {
// 	(function(index){
// 		accordionElem.children[i].onclick = function() {
// 			topImg[0].children[0].src = 'http://localhost:8888/img/services-' + i + '.jpg'
// 		}
// 	})(i);
// }




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




function setCookie( c_name, value, exdays ) {
	var c_value = escape(value);
	if (exdays) {
		var exdate = new Date();
		exdate.setDate( exdate.getDate() + exdays );
		c_value += '; expires=' + exdate.toUTCString();
	}
	document.cookie = c_name + '=' + c_value;
}

function getCookie( c_name ) {
	var i, x, y, cookies = document.cookie.split( ';' );

	for ( i = 0; i < cookies.length; i++ ) {
		x = cookies[i].substr( 0, cookies[i].indexOf( '=') );
		y = cookies[i].substr( cookies[i].indexOf( '=') + 1 );
		x = x.replace( /^\s+|\s+$/g, '' );

		if ( x === c_name ) {
			return unescape( y );
		}
	}
}

window.setTimeout(function(){ 
	// When the cookie exists, do not show the popup!
	if (getCookie('displayedPopupNewsletter')) {
		return;
	}

	document.body.insertAdjacentHTML("afterbegin", `<div class="loader"><div class="preloader"></div></div>`);

	// The popup was displayed. Set the cookie for 1 day.
	setCookie('displayedPopupNewsletter', 'yes', 1);
}, 3000);


$(document).ready(function(){

	let $loader = $('.loader');
	$loader.delay( 2000 ).fadeOut( 'slow' );

  var allPanels = $('.description').hide();
    
  $('.accordion-item').click(function() {
      let $this = $(this);
      // let $target =  $this.next();
      if(!$this.hasClass('accordion-active-item')){
         $('.accordion-item').removeClass('accordion-active-item');
         allPanels.slideUp();
         $this.addClass('accordion-active-item');
				 $this.children('.description').slideDown();
				
				let $imageUrl = $this.attr('data-image');

				$(".top img").one("load", function() {
					let $top = $('.top img');
					let $bot = $('.bot img');
					let rand = Math.random();
					console.log(rand);
					if ( rand > .5) {
						$('.top img').attr('src', $imageUrl);
					} else {
						$('.bot img').attr('src', $imageUrl);
					}
				}).each(function() {
					if(this.complete) {
							$(this).trigger('load');
					}
				});

      } else {
				allPanels.slideUp();
				$this.removeClass('accordion-active-item');
			}
    return false;
  });

  // $('.header').click(function() {
  //     let $this = $(this);
  //     let $target =  $this.next();
  //     if(!$target.hasClass('accordion-active-item')){
  //        allPanels.removeClass('accordion-active-item').slideUp();
  //        $target.parent().removeClass('accordion-active-item');
  //        $target.addClass('accordion-active-item').slideDown();
  //        $target.parent().addClass('accordion-active-item');
  //     } else {
	// 			allPanels.removeClass('accordion-active-item').slideUp();
  //        $target.parent().removeClass('accordion-active-item');
	// 		}
  //   return false;
		
  // })

// // start page parallax on mouse momve
// (function() {

// 	function animate({timing, draw, duration}) {

// 		let start = performance.now();

// 		requestAnimationFrame(function animate(time) {
// 			// timeFraction изменяется от 0 до 1
// 			let timeFraction = (time - start) / duration;
// 			if (timeFraction > 1) timeFraction = 1;

// 			// вычисление текущего состояния анимации
// 			let progress = timing(timeFraction);

// 			draw(progress); // отрисовать её

// 			if (timeFraction < 1) {
// 				requestAnimationFrame(animate);
// 			}

// 		});
// 	}


//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector(".start-page-bg");


// 		function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;

// 			animate({
// 				duration: 50,
// 				timing: linearFunction => linearFunction,
// 				draw(progress){
// 					let x = (50 - (_mouseX - _w) * -0.01) * (progress/100);
// 					let y = (50 - (_mouseX - _w) * -0.01) * (progress/100);
// 					let _depth1 = `${50 - (_mouseX - _w) * -0.01}% ${50 - (_mouseY - _h) * -0.01}%`;
// 					elem.style.backgroundPosition = _depth1;
// 				}
// 			});


//     }
// })();

	$(".room-preview").lightGallery(
		{
			selector: '.room-preview__item',
			controls: false
		}	
	);  

	$(".main-content-gallery").lightGallery(
		{
			selector: 'picture',
			controls: false
		}	
	); 



	const siteHeaderNav = $( '.site-header__nav' );

	$( '.site-header__nav-ham-btn' ).on("click", function() {
		siteHeaderNav.toggleClass('site-header__mob-nav-active');
	});


	// front page text slider
	$( '.text-carousel' ).slick({
		lazyLoad: 'ondemand',
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
	});
$('.text-carousel').show();


	$('.room-preview').on('init', function(event, slick){
		$('.num').text(1);
		$('.num').append('/<span>' + slick.slideCount + '</span>');
	});

	// rooms slider
	$( '.room-preview' ).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
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


	// .cat-counter-slider pair with rooms cat card slider
	$( '.cat-counter-slider' ).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		prevArrow: $('.cat-arrow-prev'),
		nextArrow: $('.cat-arrow-next'),
		asNavFor: '.cat-room-slider'
	});

	// rooms cat card slider
	const $window = $(window);
	const $slick_slider = $('.cat-room-slider');


	$slick_slider.on('init', function(event, slick){
		$('.num').text(3);
		$('.num').append('/<span>' + slick.slideCount + '</span>');
	});

		// On before slide change
	$slick_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide ){
		$('.num').text(nextSlide + 3);
		$('.num').append('/<span>' + slick.slideCount + '</span>');
	});


	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: false,
		pauseOnHover: false,
		asNavFor: '.cat-counter-slider',
	};
	
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

	// //slick wheel scroll
	// if ($window.width() > 1280) {
	// 	$slick_slider.on('wheel', (function(e) {
	// 		e.preventDefault();
	// 		if (e.originalEvent.deltaY < 0) {
	// 			$(this).slick('slickNext');
	// 		} else {
	// 			$(this).slick('slickPrev');
	// 		}
	// 		})
	// 	);
	// }
	 
	if ($window.width() < 1280) {
		if ($slick_slider.hasClass('slick-initialized'))
			$slick_slider.slick('unslick');
		return
	}
	if ( ! $slick_slider.hasClass('slick-initialized')) {
		return $slick_slider.slick(settings);
	}

});




