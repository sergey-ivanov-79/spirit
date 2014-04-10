$.noConflict();

(function($) {
	
	// Document Ready	
	$(document).ready(function() {
		// Init Slider (Инициализация слайдера)
		$('#slider ul li').eq(0).addClass('active');
		
		
		// Сдвиг влево
		$('#slider .asa').click(function(event) {
			// Анулирует значения по умолчанию (т.е. не будет работать переход по ссылке, а просто клик)
			event.preventDefault();
			
			var parent = $('#slider ul'),
					currentSlide = $('#slider ul li.active'),
					prevSlide = $('#slider ul li').eq(currentSlide.index() - 1),
					widthPrevSlide = prevSlide.width();
					countSlides = $('#slider ul li').size();
					
			if(currentSlide.index() != 0) {					
				parent.css('left', parent.position().left + widthPrevSlide);
				
				$('#slider ul li').eq(currentSlide.index() - 1).addClass('active');
				currentSlide.removeClass('active');
			}
		});
		
		// Сдвиг вправо
		$('#slider .serw').click(function(e) {
			e.preventDefault();
			
			var parent = $('#slider ul'),
					currentSlide = $('#slider ul li.active'),
					widthCurSlide = currentSlide.width(),
					countSlides = $('#slider ul li').size();
					
			if(currentSlide.index() + 1 != countSlides - 1) {					
				parent.css('left', parent.position().left - widthCurSlide);
				
				$('#slider ul li').eq(currentSlide.index() + 1).addClass('active');
				currentSlide.removeClass('active');
			}
		});
        
        $('#content .contentL .images .btn').click(function() {
            
        });
	});

})(jQuery);