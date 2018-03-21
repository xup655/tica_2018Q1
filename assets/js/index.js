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
	// function nt_reHeight() {
	// 	$('.js_txt_hei').height( $('.js_img_hei').height() );
	// }
	
	cb_reHeight();
	// nt_reHeight();
	
	$(window).resize(function(){
		cb_reHeight();
		// nt_reHeight();
	});
	
});