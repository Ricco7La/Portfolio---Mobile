// GLOBAL
var _CurrentSlide = 0;
function btnMoreClick(){
	$.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
   	$.fn.fullpage.moveSlideRight();
   	document.getElementById("btnBack").style.visibility = "visible";
}
function btnBackClick(){
   	$.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
   	$.fn.fullpage.moveSlideLeft();
   	document.getElementById("btnBack").style.visibility = "hidden";
}



//INIT
$(document).ready(function(){

	//fullpage
	$('#fullpage').fullpage({
		menu: '#menu',
        anchors:['home', 'about', 'works', 'contact'],
        scrollingSpeed: 1250,
        navigation: true,
        navigationTooltips: ['Home', 'About Me', 'Works', 'Contact'],
        slidesNavigation: true,
        controlArrows: true,
		verticalCentered: true,
        controlArrows: false,
        onLeave: function(index, nextIndex, direction){
        	if (index == 3 && _CurrentSlide != 0) 
        	{
        		_CurrentSlide = 0;
        		$.fn.fullpage.moveSlideLeft();
        	}
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            _CurrentSlide = slideIndex;
            setTimeout(function(){ 
            	$.fn.fullpage.setAllowScrolling(true);
            	$.fn.fullpage.setKeyboardScrolling(true);
            }, 125);
        },
        onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
    	
    });

    $.fn.fullpage.setKeyboardScrolling(false, 'left, right');

	//Google Map
	function initialize() {
	  var myLatLong = new google.maps.LatLng(49.97366666666667,4.529833333333333);
	  var mapProp = {
	    center: myLatLong,
	    zoom:17,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	  var infowindow = new google.maps.InfoWindow({
	    content: 'Ma maison',
	    maxWidth: 100
	  });
	  var marker = new google.maps.Marker({
	    position: myLatLong,
	    map: map,
	    title: 'Ma maison'
	  });
	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	// Slick
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		adaptiveHeight: true
	});

	// On before slide change
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  		document.getElementById("ProjectDesc" + currentSlide).className = "hidden-element";
  		document.getElementById("ProjectDesc" + nextSlide).className = "";
  		document.getElementById("ProjectMore" + currentSlide).className = "hidden-element";
  		document.getElementById("ProjectMore" + nextSlide).className = "";
	});
	

	var dotsList = document.getElementsByClassName("slick-dots")[0];
	var dotsListContainer = document.createElement('div');
	dotsList.parentElement.replaceChild(dotsListContainer,dotsList);

	dotsListContainer.classList.add('flex-container');
	dotsList.classList.add('flex-element');

	var prevArrow = document.createElement('button');
	prevArrow.innerHTML = '<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>';
	prevArrow.classList.add('leftArrow');
	prevArrow.classList.add('arrows');
	prevArrow.classList.add('flex-element');
	var nextArrow = document.createElement('button');
	nextArrow.innerHTML = '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>';
	nextArrow.classList.add('rightArrow');
	nextArrow.classList.add('arrows');
	nextArrow.classList.add('flex-element');

	dotsListContainer.appendChild(prevArrow);
	dotsListContainer.appendChild(dotsList);
	dotsListContainer.appendChild(nextArrow);

	$('.leftArrow').on('click', function(){
    	$('.slider').slick("slickPrev");
	});
	$('.rightArrow').on('click', function(){
    	$('.slider').slick("slickNext");
	});

	//Smartphone
	$(".btn-toggle-menu").click(function() {
    	$(".main-menu").toggleClass("hidden-menu");
    });
	

});
