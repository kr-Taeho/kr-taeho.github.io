$(document).on("ready", function(){
    $("body").append("<div id='menu-overlay'></div>");

    // 비주얼 영역 높이값 설정
	var hei = $(window).innerHeight();
	$(".visual-section.h-100").css("height", hei);

	// dim click
    $("#menu-overlay").click(function(){
        if($(this).hasClass("pop-on")){
            var id = $(this).data("pop-id");
            $(this).removeClass("pop-on").removeAttr("data-pop-id").removeData().fadeOut(100);
            $("#"+id+"").removeClass("pop-on").fadeOut(100);
        }
	});
});

$(window).on('load', function(){
	// 비주얼 영역 높이값 설정
	var w = $(window).innerWidth(),
		h = $(window).innerHeight();
	$(".visual-section.h-100").css("height", h);
});

function scrollFixed() { // 스크롤 Fixed
	var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
	var ovY;
	!isTablet === true ? (ovY = "scroll") : (ovY = "hidden");

	$("html").css({
		overflow : "hidden",
		"overflow-y" : ovY,
		position : "fixed",
		width : "100%",
		top : -$(window).scrollTop()
	});
}

function scrollAuto() {  // 스크롤 Auto
	var hTop = $("html").css("top");
	var hTop_2 = hTop.split("px");
	var winTop = Math.abs(hTop_2[0]);

	$("html").removeAttr("style");
	window.scrollTo(0, winTop);
}

var imgGallerySlider;
var popGallerySlider;
function imageGallery() { // 포토갤러리
	imgGallerySlider = $('#image-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:500,
		auto:false,
		loop:true,
		//adaptiveHeight:true,
		onSliderLoad: function() {
			$('#image-gallery').removeClass('cS-hidden');
		},
		onAfterSlide: function(el, index) {
			popGallerySlider.goToSlide(index);
		}
	});
}

function popGallery() { // 팝업갤러리
	popGallerySlider = $('#pop-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:500,
		auto:false,
		loop:true,
		//adaptiveHeight:true,
		onSliderLoad: function(el, index) {
			$('#pop-gallery').removeClass('cS-hidden');
			el.find("li:not(.clone)").eq(0).addClass("pg_idx");
		},
		onAfterSlide: function(el, index){

		}
	});
}
function galleryPOP(toggle, type, index) { // 갤러리팝업 열고,닫기
	if(type === "type1") return galleryType1(toggle);
}
function galleryType1(toggle){ // 슬라이드형 갤러리
	var el = $(".gallery-pop-wrap"),
		sw = $(".lSSlideWrapper");

	if(sw.hasClass('moveOn')) return this;
	
	if(toggle === "open"){
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(500).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		var index = $('#pop-gallery li.active').index();
		imgGallerySlider.goToSlide(index);
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}