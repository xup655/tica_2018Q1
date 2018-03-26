$(function(){

	// Country Banner
	function cb_reHeight() {
		if( $(window).width() >= 768 ){
			$('.js_height').height( $('.js_height').width()*0.405 );
		}
		else {
			$('.js_height').css('height', '');
		}
	}
	// News text
	function nt_reHeight() {
		var img = $('.js_img_hei'), txt = $('.js_txt_hei');
		img.css('height', '');
		txt.css('height', '');
	    if( $(window).width() > 767) {
		    if( img.height() > txt.height() ) {
			txt.height( img.height() );
	    	}
	    	else {
			img.height( txt.height() );
		}
	    }
	}
	
	cb_reHeight();
	
	$(window).resize(function(){
		cb_reHeight();
		nt_reHeight();
	});
	$(window).load(function(){
		nt_reHeight();
	});
	
});