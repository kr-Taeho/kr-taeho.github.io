
var galleryPhotos1 = [
	"images/sample_images_01.png",
	"images/sample_images_02.png",
	"images/sample_images_03.png",
	"images/sample_images_04.png",
	"images/sample_images_05.png",
	"images/sample_images_06.png",
	"images/sample_images_07.png",
	"images/sample_images_08.png",
	"images/sample_images_09.png",
	"images/sample_images_10.png",
	"images/sample_images_11.png",
	"images/sample_images_12.png"
];

var galleryPhotos2 = [
	"images/sample_images_01.png",
	"images/sample_images_02.png",
	"images/sample_images_03.png",
	"images/sample_images_04.png",
	"images/sample_images_05.png",
	"images/sample_images_06.png",
	"images/sample_images_07.png",
	"images/sample_images_08.png",
	"images/sample_images_09.png"
]

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

function kakaoInit(){
	Kakao.init('7462c1719a1f29d609428d178740a73a');
}
function flowerEffect(){
	//꽃날리는 애니메이션을 넣을 예정..
}

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

function popOpen(padding, id) { // 팝업 열기 onclick
	// scrollFixed();
	// dim
	$("#menu-overlay")
	.addClass("pop-on")
	.attr("data-pop-id", id)
	.fadeIn(300);

	$("#"+id+"")
	.css({"padding": ""+padding+"", "margin-top": -$("#"+id+"")
	.outerHeight()/2})
	.addClass("pop-on")
	.fadeIn(300);
}

function popClose(id) { // 팝업 닫기 onclick
	// scrollAuto();
	// dim click
	$("#menu-overlay[data-pop-id="+id+"]")
	.removeClass("pop-on")
	.removeAttr("data-pop-id")
	.removeData()
	.fadeOut(100);

	$("#"+id+"")
	.removeClass("pop-on")
	.fadeOut(100);
}

function dataPicker(data) { // 달력 출력
	var el = $("#calendar");
	var date = new Date(data);

	el.datepicker({
		dateFormat: 'yyyy-mm-dd' //Input Display Format 변경
		,defaultDate: date // 기본 날짜 설정
		,showOtherMonths: false //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear: false //년도 먼저 나오고, 뒤에 월 표시
		,changeYear: false //콤보박스에서 년 선택 가능
		,changeMonth: false //콤보박스에서 월 선택 가능      
		,constrainInput: false //형식외 텍스트 입력제한. 디폴트 true
		//,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		//,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
		//,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
		//,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		//,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['<strong>1</strong> January','<strong>2</strong> Fedruary','<strong>3</strong> March','<strong>4</strong> April','<strong>5</strong> May','<strong>6</strong> June','<strong>7</strong> July','<strong>8</strong> August','<strong>9</strong> September','<strong>10</strong> October','<strong>11</strong> November','<strong>12</strong> December'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'Sa']
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
		//,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		//,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
		,onSelect: function(date){
			
		}
	});
}



var imgGallerySlider;
var popGallerySlider;
function imageGallery() { // 포토갤러리
	for(var i = 0; i < galleryPhotos1.length; i++){
		$('#image-gallery').append(
			"<li data-thumb=\""+galleryPhotos1[i]+"\" onclick=\"galleryPOP('open', 'type1');\">" 
					+"<div class=\"box\">"
					  +"<div class=\"pos\">"
						+"<div class=\"cen\">"
						  +"<img src=\""+galleryPhotos1[i]+"\" />"
						+"</div>"
					  +"</div>"
					+"</div>"
				  +"</li>"
			);
	}
	
	for(var i = 0; i < galleryPhotos2.length; i++){
		$('#grid-gallery').append(
			"<figure><a href=\"javascript:galleryPOP('open', 'type2', "+(i+1)+");\" style=\"background: url('"+galleryPhotos2[i]+"' ) no-repeat center center\" itemprop=\"contentUrl\" data-size=\"800x1200\" class=\"setimgsize\"><img src=\"./images/img_frame.png\" class=\"img_frame\" itemprop=\"thumbnail\" alt=\"\"></a> </figure>"
		);
	}

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
	else if(type === "type2") return galleryType2(toggle, index);
}
function popGalleryImageAppend(photos){
	$("#pop-body").append("<ul id=\"pop-gallery\" class=\"gallery list-unstyled cS-hidden roll_type01\"></ul>")
	for (var i = 0; i < photos.length; i++){
		$("#pop-gallery").append(
			"<li data-thumb=\""+photos[i]+"\">"
			+"<div class=\"box\">"
				+"<div class=\"pos\">"
					+"<div class=\"cen\">"
						+"<img src=\""+photos[i]+"\" />"
					+"</div>"
				+"</div>"
			+"</div>"
		+"</li>"
		);
	}
	popGallery();
}
function popGalleryImageClear(){
	$("#pop-body").empty();
	popGallerySlider = null;
}
function galleryType1(toggle){ // 슬라이드형 갤러리
	var el = $(".gallery-pop-wrap"),
		sw = $(".lSSlideWrapper");

	if(sw.hasClass('moveOn')) return this;
	
	if(toggle === "open"){
		popGalleryImageAppend(galleryPhotos1);
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
		popGalleryImageClear();
		scrollAuto();
	}
}
function galleryType2(toggle, index){ // 슬라이드형 갤러리
	var el = $(".gallery-pop-wrap"),
		sw = $(".lSSlideWrapper");

	if(sw.hasClass('moveOn')) return this;
	
	if(toggle === "open"){
		popGalleryImageAppend(galleryPhotos2);
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(500).animate({
			"opacity" : 1
		}, 300);
		popGallerySlider.goToSlide(index);
		scrollFixed();
	} else if(toggle === "close"){
		var index = $('#pop-gallery li.active').index();
		imgGallerySlider.goToSlide(index);
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		popGalleryImageClear();
		scrollAuto();
	}
}

function phoneCall(number) {
	var user = navigator.userAgent;
	if(user.indexOf("iPhone") > -1 || user.indexOf("iPad") > -1 || user.indexOf("Android") > -1){
		document.location.href = 'tel:'+number;
	} else {
		alert('PC 환경에서는 사용할 수 없습니다.');
	}
}
function phoneSMS(number) {
	var user = navigator.userAgent;
	if(user.indexOf("iPhone") > -1 || user.indexOf("iPad") > -1|| user.indexOf("Android") > -1){
		document.location.href = 'sms:'+number;
	} else {
		alert('PC 환경에서는 사용할 수 없습니다.');
	}
}
function kakaoShare(){
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
		  title: '태호 ♥ 지안 결혼합니다.',
		  description: '#태호 #지안 #결혼 #행복 #감사',
		  imageUrl: 'https://kr-taeho.github.io/images/photo3_576x768.png',
		  link: {
			mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
			webUrl: '카카오공유하기 시 클릭 후 이동 경로',
		  },
		},
		buttons: [
		  {
			title: '웹으로 보기',
			link: {
			  mobileWebUrl: 'https://kr-taeho.github.io/',
			  webUrl: 'https://kr-taeho.github.io/',
			},
		  },
		],
		// 카카오톡 미설치 시 카카오톡 설치 경로이동
		installTalk: true,
	  })
}
function facebookShare(){
	var sendUrl = "kr-Taeho.github.io/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}